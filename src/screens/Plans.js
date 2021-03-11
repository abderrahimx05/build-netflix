import React, { useEffect, useState } from "react";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Plans.css";
import { loadStripe } from "@stripe/stripe-js";
function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (doc) => {
          products[doc.id] = doc.data();
          const priceSnap = await doc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[doc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  console.log(products);
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        //here show the message error
        alert(`An error occured : ${error.message}`);
      }
      if (sessionId) {
        //todo : initial stripe
        const stripe = await loadStripe(
          "pk_test_51IShp9LG54DzVbjPm3o6NusAXuLBrlcSz5Zbw2IIVKnD0okv4XcAp8CYkLxZ5OAePaWxOQm81ksLWOMiAJDUw8r4002wXzqIZ0"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        //TODO: add some thing here to check if the user is active
        return (
          <div className="plans__plans">
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;

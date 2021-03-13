import React, { useEffect, useState } from "react";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Plans.css";
import { loadStripe } from "@stripe/stripe-js";
function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);
  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start : subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid ]);
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
  console.log(subscription);
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
        //TODO: initial stripe
        const stripe = await loadStripe(
          "pk_test_51IShp9LG54DzVbjPm3o6NusAXuLBrlcSz5Zbw2IIVKnD0okv4XcAp8CYkLxZ5OAePaWxOQm81ksLWOMiAJDUw8r4002wXzqIZ0"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <div className="plans">
    <br />
    {subscription && <p className="plans__date"> Renewal date :{new Date(subscription?.current_period_end*1000).toLocaleDateString()} </p>}
      {Object.entries(products).map(([productId, productData]) => {
        //TODO: add some thing here to check if the user is active
        const isCurrentPachage = productData.name?.includes(subscription?.role);
        return (
          <div key={productId} className={`${isCurrentPachage && 'plans__plans--disabled' } plans__plans`}>
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => !isCurrentPachage && loadCheckout(productData.prices.priceId)}>
              {isCurrentPachage ? 'Current Package' :'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;

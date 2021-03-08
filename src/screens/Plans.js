import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./Plans.css";
function Plans() {
  const [products, setProducts] = useState([]);
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
  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        //TODO: add some thing here to check if the user is active
        return (
          <div className="plans__plans">
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
              <button>Subscribe</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;

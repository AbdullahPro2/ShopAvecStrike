import React, { useContext } from "react";
import cart from "../Assets/cart.png";
import { ProductContext } from "../context/productContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
function CartBtn({ product, setShowAlert }) {
  const { user } = useContext(ProductContext);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const docRef = await addDoc(collection(db, "cartItems"), {
          productId: product.id,
          productName: product.name,
          userId: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      setShowAlert(true);
    }
  };

  return (
    <button
      className="add-cart category-prodcut-button"
      onClick={handleAddToCart}
    >
      <img src={cart} alt="cart" className="add-cart-image" />
      Add To Cart
    </button>
  );
}

export default CartBtn;

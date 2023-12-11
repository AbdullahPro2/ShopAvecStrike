import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import Loader from "../components/Loader";
import CartProduct from "../components/CartProduct";

function Cart() {
  const { cart, isLoading } = useContext(ProductContext);

  if (isLoading) return <Loader />;
  if (!cart.length)
    return (
      <h1 className="empty-cart">
        Cart is Empty,{" "}
        <Link to="/allproducts" className="empty-cart-link">
          Go Shopping Now?
        </Link>
      </h1>
    );
  if (cart) {
    return (
      <>
        <div className="products-heading">
          <h1>My Cart Products</h1>
          <h3>We design our products with quality in mind</h3>
        </div>
        <div className="cart-container">
          {cart
            .reduce((uniqueItems, item) => {
              const existingItem = uniqueItems.find(
                (uniqueItem) => uniqueItem.id === item.id
              );

              if (!existingItem) {
                uniqueItems.push({ ...item, quantity: 1 });
              } else {
                existingItem.quantity += 1;
              }

              return uniqueItems;
            }, [])
            .map((uniqueItem) => (
              <CartProduct
                key={uniqueItem.id}
                item={uniqueItem}
                quantity={uniqueItem.quantity}
              />
            ))}
        </div>
      </>
    );
  }
}

export default Cart;

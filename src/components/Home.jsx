import React from "react";
import Apple from "../assets/Apple.jpg";
import Shoe from "../assets/Shoe.webp";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: Apple,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: Shoe,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;

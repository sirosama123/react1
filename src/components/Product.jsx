import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2 className="name1">{props.name}</h2>
    </div>
  );
}
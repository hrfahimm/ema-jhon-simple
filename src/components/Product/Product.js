import React from "react";
import "./Product.css";
const Product = (props) => {
	//console.log(props.product);
	const {name, img, price, stock, seller} = props.product;
	return (
		<div className="product">
			<div className="product-img">
				<img src={img} alt="" />
			</div>
			<div>
				<h4 className="product-name">{name}</h4>
				<p className="product-seller">
					<small>By: {seller}</small>
				</p>
				<p className="product-price">Price: {price}</p>
				<p>
					<small>Only {stock} left in stock - order soon </small>
				</p>
				<button className="btn-regular">Add to cart</button>
			</div>
		</div>
	);
};

export default Product;

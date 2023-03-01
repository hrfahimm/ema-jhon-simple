import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
	//console.log(props.product);
	const {name, img, price, stock, seller} = props.product;
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
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
				<button onClick={() => props.handeleAddToCart(props.product)} className="btn-regular">
					{cartIcon} Add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;

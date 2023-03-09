import React from "react";
import "./Cart.css";
const Cart = (props) => {
	const {cart} = props;
	// const totalReducer = (previous, product) => previous + product.price;
	// const total = cart.reduce(totalReducer, 0);
	let total = 0;
	for (const product of cart) {
		total = total + product.price;
	}
	const shipping = total > 0 ? 15 : 0;
	const tax = (total + shipping) * 10;
	const grandTotal = total + shipping + tax;

	return (
		<div className="cart-order menu-icon">
			<h3>Order</h3>
			<h5>Item Orders--: {props.cart.length}</h5>
			<p>Total---------: {total.toFixed(2)}</p>
			<p>Shipping----: {shipping}</p>
			<p>Tax-----------: {tax.toFixed(2)}</p>
			<h4 classsName="g-total">Grand Total-: {grandTotal.toFixed(2)}</h4>
		</div>
	);
};

export default Cart;

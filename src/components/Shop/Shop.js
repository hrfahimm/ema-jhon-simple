import React, {useEffect, useState} from "react";
import {addToDb, getStoredCart} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	useEffect(() => {
		if (products.length) {
			const savedCart = getStoredCart();
			const storedCart = [];
			for (const key in savedCart) {
				console.log(key);
				const addedproduct = products.find((product) => product.key === key);
				//console.log(key, addedproduct);
				storedCart.push(addedproduct);
			}
			setCart(storedCart);
		}
	}, [products]);
	const handeleAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		//save to local storage for now

		addToDb(product.key);
	};
	return (
		<div className="shop-container">
			<div className="product-container">
				{products.map((product) => (
					<Product key={product.key} product={product} handeleAddToCart={handeleAddToCart}></Product>
				))}
			</div>

			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;

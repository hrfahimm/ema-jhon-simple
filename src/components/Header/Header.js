import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
	return (
		// <div className="header">
		// 	<img className="logo" src={logo} alt="" />
		// 	<nav>
		// 		<a href="/shop">Shop</a>
		// 		<a href="/order">Order</a>
		// 		<a href="/inventory">Manag Inventory</a>
		// 	</nav>
		// </div>
		<div className="header">
			<div className="logo">
				<img className="img-logo" src={logo} alt="" />
			</div>
			<div className="menu">
				<a href="/shop">Shop</a>
				<a href="/order">Order</a>
				<a href="/inventory">Manag Inventory</a>
			</div>
		</div>
	);
};

export default Header;

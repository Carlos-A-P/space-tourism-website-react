import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import Hamburger_Menu from "../assets/shared/icon-hamburger.svg";
import Close_Menu from "../assets/shared/icon-close.svg";

export default function Navbar() {
	const [openLinks, setOpenLinks] = useState(false);

	const toggleNavbar = () => {
		setOpenLinks(!openLinks);
	};

	return (
		<header className="primary-header flex">
			<div style={{ width: "30px" }}>
				<img src={logo} alt="space tourism logo" />
			</div>
			{/* <button
				onClick={toggleNavbar}
				className="menu-icon"
				aria-controls="primary-navigation"
			>
				<span class="sr-only" aria-expanded="false">
					Menu
				</span>
			</button> */}
			<nav className="navbar ">
				<ul className="primary-navigation flex">
					<li>
						<Link
							to="/"
							className="active ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator"
						>
							{/* the aria-hidden is so that span won't be read to the screen reader */}
							<span aria-hidden="true">00</span>Home
						</Link>
					</li>
					<li>
						<Link
							to="/destination"
							className="ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator"
						>
							<span aria-hidden="true">01</span>Destination
						</Link>
					</li>
					<li>
						<Link
							to="/crew"
							className="ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator"
						>
							<span aria-hidden="true">02</span>Crew
						</Link>
					</li>
					<li>
						<Link
							to="/technology"
							className="ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator"
						>
							<span aria-hidden="true">03</span>Technology
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

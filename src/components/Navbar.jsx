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
		<>
			<header>
				<div>
					<img src={logo} alt="space tourism logo" />
				</div>
				<button
					onClick={toggleNavbar}
					className="menu-icon"
					aria-controls="primary-navigation"
				>
					<span class="sr-only" aria-expanded="false">
						Menu
					</span>
				</button>
				<nav className="navbar">
					<Link to="">
						{/* the aria-hidden is so that span won't be read to the screen reader */}
						<span aria-hidden="true">00</span>Home
					</Link>
					<Link to="">
						<span aria-hidden="true">01</span>Destination
					</Link>
					<Link to="">
						<span aria-hidden="true">02</span>Crew
					</Link>
					<Link to="">
						<span aria-hidden="true">03</span>Technology
					</Link>
				</nav>
			</header>
		</>
	);
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

export default function Navbar() {
	const [openLinks, setOpenLinks] = useState(false);

	const toggleNavbar = () => {
		setOpenLinks(!openLinks);
	};

	return (
		<>
			<a href="#main" className="skip-to-content">
				Skip to content
			</a>
			<header className="primary-header flex">
				<div>
					<img src={logo} alt="space tourism logo" className="logo" />
				</div>
				<button
					className={`mobile-nav-toggle ${openLinks ? "close" : "open"}`}
					aria-controls="primary-navigation"
					onClick={toggleNavbar}
				>
					{/* only visible for screen readers */}
					<span aria-expanded={!openLinks} className="sr-only">
						Menu
					</span>
				</button>
				<nav className="navbar ">
					<ul
						className={`primary-navigation flex ${openLinks ? "" : "hidden"}`}
					>
						<li>
							<NavLink
								to="/"
								className={`${(isActive) =>
									isActive
										? "active"
										: ""} ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
							>
								{/* the aria-hidden is so that span won't be read to the screen reader */}
								<span aria-hidden="true">00</span>Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/destination"
								className={`${(isActive) =>
									isActive
										? "active"
										: ""} ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
							>
								<span aria-hidden="true">01</span>Destination
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/crew"
								className={`${(isActive) =>
									isActive
										? "active"
										: ""} ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
							>
								<span aria-hidden="true">02</span>Crew
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/technology"
								className={`${(isActive) =>
									isActive
										? "active"
										: ""} ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
							>
								<span aria-hidden="true">03</span>Technology
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

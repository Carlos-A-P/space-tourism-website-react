import React, { useEffect, useState } from "react";
import Data from "../helpers/data.json";
import Vehicle_portrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Vehicle_landscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Capsule_portrait from "../assets/technology/image-space-capsule-portrait.jpg";
import Capsule_landscape from "../assets/technology/image-space-capsule-landscape.jpg";
import Spaceport_portrait from "../assets/technology/image-spaceport-portrait.jpg";
import Spaceport_landscape from "../assets/technology/image-spaceport-landscape.jpg";

function Technology(props) {
	useEffect(() => {
		props.changeBG("technology");
	});

	const [currentPage, setCurrentPage] = useState("Launch vehicle");
	const [currentImage, setCurrentImage] = useState({
		portrait: Vehicle_portrait,
		landscape: Vehicle_landscape,
	});
	const [clicked, setClicked] = useState(0);
	// toggle function
	const toggle = (index) => {
		//if index wasn't clicked then set to the actual value which ends up opening it
		setClicked(index);
		// settabFocus(index);
		switch (index) {
			case 0:
				setCurrentPage("Launch vehicle");
				setCurrentImage({
					...currentImage,
					portrait: Vehicle_portrait,
					landscape: Vehicle_landscape,
				});
				break;
			case 1:
				setCurrentPage("Spaceport");
				setCurrentImage({
					...currentImage,
					portrait: Spaceport_portrait,
					landscape: Spaceport_landscape,
				});
				break;
			case 2:
				setCurrentPage("Space capsule");
				setCurrentImage({
					...currentImage,
					portrait: Capsule_portrait,
					landscape: Capsule_landscape,
				});
				break;
			default:
				return null;
		}
	};

	return (
		<main id="main" className="grid-container grid-container--tech flow">
			<h1 className="fs-500 numbered-title">
				<span aria-hidden="true">03</span> Space Launch 101
			</h1>
			<div className="flex number-selectors">
				{Data.technology.map((item, index) => {
					return (
						<button
							key={index}
							onClick={() => toggle(index)}
							aria-selected={currentPage === item.name ? true : false}
							role="tab"
							className=""
						>
							{index + 1}
							<span className="sr-only">{item.name}</span>
						</button>
					);
				})}
			</div>
			{/* this can be a component */}
			<article className="tech-details flow" role="tabpanel" tabIndex="0">
				<header>
					<h2 className="text-accent fs-400 ff-sans-cond uppercase">
						The Terminology...
					</h2>
					<p className="fs-700 ff-serif uppercase">
						{Data.technology[clicked].name}
					</p>
				</header>
				<p className="page-info fs-400 text-accent">
					{Data.technology[clicked].description}
				</p>
			</article>
			<div className="picture">
				<img
					className="landscape"
					src={currentImage.landscape}
					alt="Launch Vehicle"
				/>
				<img
					className="portrait"
					src={currentImage.portrait}
					alt="Launch Vehicle"
				/>
			</div>
		</main>
	);
}

export default Technology;

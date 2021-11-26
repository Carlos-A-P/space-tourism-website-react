import React, { useEffect, useRef, useState } from "react";
// import Navbar from "../components/Navbar";
import Moon_image from "../assets/destination/image-moon.png";
import Moon_webp from "../assets/destination/image-moon.webp";

const buttonList = [
	{
		title: "Moon",
		aria_selected: true,
		aria_controls: "moon-tab",
		id: "0",
	},
	{
		title: "Mars",
		aria_selected: false,
		aria_controls: "moon-tab",
		id: "1",
	},
	{
		title: "Europa",
		aria_selected: false,
		aria_controls: "moon-tab",
		id: "2",
	},
	{
		title: "Titan",
		aria_selected: false,
		aria_controls: "moon-tab",
		id: "3",
	},
];

function Destination(props) {
	useEffect(() => {
		props.changeBG("destination");
	});

	const myBtn = useRef();

	const [tabFocus, settabFocus] = useState(0);

	const keyPress = (e) => {
		const keydownLeft = 37;
		const keydownRight = 39;

		if (e.keyCode === keydownRight) {
			if (tabFocus < 3) {
				settabFocus(tabFocus + 1);
				myBtn.current.children[tabFocus + 1].focus();
			} else {
				settabFocus(0);
				myBtn.current.children[0].focus();
			}
		}

		if (e.keyCode === keydownLeft) {
			if (tabFocus > 0) {
				settabFocus(tabFocus - 1);
				myBtn.current.children[tabFocus - 1].focus();
			} else {
				settabFocus(3);
				myBtn.current.children[3].focus();
			}
		}
	};

	const [clicked, setClicked] = useState(false);
	// toggle function
	const toggle = (index) => {
		if (clicked === index) {
			return;
		}
		//if index wasn't clicked then set to the actual value which ends up opening it
		setClicked(index);
	};

	return (
		<main id="main" className="grid-container grid-container--destination flow">
			{/* aria hidden is so that screen readers don't have to hear the span */}
			<h1 className="fs-500 numbered-title">
				<span aria-hidden="true">01</span> Pick your destination
			</h1>

			<picture>
				<source srcSet={Moon_webp} type="image/webp" />
				<img src={Moon_image} alt="the moon" />
			</picture>

			<div
				className="tab-list flex"
				// the role attribute can be utilized in plain JS to querySelect this element for the tab functionality
				role="tablist"
				aria-label="destination list"
				onKeyDown={keyPress}
				ref={myBtn}
			>
				{buttonList.map((item, index) => {
					return (
						<button
							key={item.id}
							onClick={() => toggle(index)}
							aria-selected={clicked === index ? true : false}
							role="tab"
							className="underline-indicator uppercase ff-sans-cond text-accent letter-spacing-2"
							tabIndex={tabFocus === Number(item.id) ? "0" : "-1"}
						>
							{item.title}
						</button>
					);
				})}
			</div>

			{/* this can be a component */}
			{/* description- articles are any self-contained bit of information*/}
			<article
				className="destination-info"
				id="moon-tab"
				tabIndex="0"
				role="tabpanel"
			>
				<h2 className="fs-800 ff-serif text-white letter-spacing-1 d-block uppercase">
					Moon
				</h2>

				<p className="text-accent fs-400">
					See our planet as you’ve never seen it before. A perfect relaxing trip
					away to help regain perspective and come back refreshed. While you’re
					there, take in some history by visiting the Luna 2 and Apollo 11
					landing sites.
				</p>

				<div className="destination-meta flex">
					<div>
						<h3 className="text-accent uppercase fs-200">Avg. distance</h3>
						<p className="ff-serif fs-600 uppercase">384,400 km</p>
					</div>
					<div>
						<h3 className="text-accent uppercase fs-200">Est. travel time</h3>
						<p className="ff-serif fs-600 uppercase">3 days</p>
					</div>
				</div>
			</article>
		</main>
	);
}

export default Destination;

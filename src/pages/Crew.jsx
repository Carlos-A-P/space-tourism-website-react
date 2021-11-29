import React, { useEffect, useState, useRef } from "react";
import Data from "../helpers/data.json";
import Douglas_png from "../assets/crew/image-douglas-hurley.png";
import Douglas_webp from "../assets/crew/image-douglas-hurley.webp";
import Mark_png from "../assets/crew/image-mark-shuttleworth.png";
import Mark_webp from "../assets/crew/image-mark-shuttleworth.webp";
import Victor_png from "../assets/crew/image-victor-glover.png";
import Victor_webp from "../assets/crew/image-victor-glover.webp";
import Anousheh_png from "../assets/crew/image-anousheh-ansari.png";
import Anousheh_webp from "../assets/crew/image-anousheh-ansari.webp";

// const crewList = [
// 	{
// 		title: 'Douglas'
// 	}
// ]

function Crew(props) {
	useEffect(() => {
		props.changeBG("crew");
	});

	// console.log(Data.destinations.map((x, index) => console.log(x.name, index)));
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

	const [currentPage, setCurrentPage] = useState("Douglas Hurley");
	const [currentImage, setCurrentImage] = useState({
		png: Douglas_png,
		webp: Douglas_webp,
	});
	const [clicked, setClicked] = useState(0);

	const toggle = (index) => {
		//if index wasn't clicked then set to the actual value which ends up opening it
		setClicked(index);
		settabFocus(index);
		switch (index) {
			case 0:
				setCurrentPage("Douglas Hurley");
				setCurrentImage({
					...currentImage,
					png: Douglas_png,
					webp: Douglas_webp,
				});
				break;
			case 1:
				setCurrentPage("Mark Shuttleworth");
				setCurrentImage({ ...currentImage, png: Mark_png, webp: Mark_webp });
				break;
			case 2:
				setCurrentPage("Victor Glover");
				setCurrentImage({
					...currentImage,
					png: Victor_png,
					webp: Victor_webp,
				});
				break;
			case 3:
				setCurrentPage("Anousheh Ansari");
				setCurrentImage({
					...currentImage,
					png: Anousheh_png,
					webp: Anousheh_webp,
				});
				break;
			default:
				return null;
		}
	};
	return (
		<main id="main" className="grid-container grid-container--crew flow">
			<h1 className="fs-500 numbered-title">
				<span aria-hidden="true">02</span> Meet your crew
			</h1>

			<div className="flex dot-selectors" ref={myBtn} onKeyDown={keyPress}>
				{Data.crew.map((x, index) => {
					return (
						// console.log(x.name, index)
						<button
							key={index}
							onClick={() => toggle(index)}
							className="dot-indicator"
							aria-selected={currentPage === x.name ? true : false}
							role="tab"
							tabIndex={tabFocus === index ? "0" : "-1"}
						>
							<span className="sr-only">{x.role}</span>
						</button>
					);
				})}
			</div>

			<article className="crew-details flow" role="tabpanel" tabIndex="0">
				<header className=" flow--space-small">
					<h2 className="fs-600 ff-serif uppercase">
						{Data.crew[clicked].role}
					</h2>
					<p className="fs-700 ff-serif uppercase">{Data.crew[clicked].name}</p>
				</header>
				<p className="page-info fs-400 text-accent">{Data.crew[clicked].bio}</p>
			</article>
			<picture>
				<source srcSet={currentImage.webp} type="image/webp" />
				<img src={currentImage.png} alt={Data.crew[clicked].role} />
			</picture>
		</main>
	);
}

export default Crew;

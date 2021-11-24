import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import Douglas_png from "../assets/crew/image-douglas-hurley.png";
// import Douglas_webp from "../assets/crew/image-douglas-hurley.webp";

function Crew(props) {
	useEffect(() => {
		props.changeBG("crew");
	});
	return (
		<main id="main" className="grid-container grid-container--crew flow">
			<h1 className="fs-500 numbered-title">
				<span aria-hidden="true">02</span> Meet your crew
			</h1>

			<div className="flex dot-selectors">
				<button className="dot-indicator" aria-selected="true" role="tab">
					<span className="sr-only">Slide title</span>
				</button>
				<button className="dot-indicator" aria-selected="false" role="tab">
					<span className="sr-only">Slide title</span>
				</button>
				<button className="dot-indicator" aria-selected="false" role="tab">
					<span className="sr-only">Slide title</span>
				</button>
				<button className="dot-indicator" aria-selected="false" role="tab">
					<span className="sr-only">Slide title</span>
				</button>
			</div>

			<article className="crew-details" role="tabpanel" tabIndex="0">
				<h2 className="fs-600 ff-serif uppercase">Commander</h2>
				<p className="fs-700 ff-serif uppercase">Douglas Hurley</p>
				<p>
					Douglas Gerald Hurley is an American engineer, former Marine Corps
					pilot and former NASA astronaut. He launched into space for the third
					time as commander of Crew Dragon Demo-2.
				</p>
			</article>

			<img src={Douglas_png} alt="Douglas Hurley" />
		</main>
	);
}

export default Crew;

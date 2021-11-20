import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import Douglas_png from "../assets/crew/image-douglas-hurley.png";
import Douglas_webp from "../assets/crew/image-douglas-hurley.webp";

function Crew(props) {
	useEffect(() => {
		props.changeBG("crew");
	});
	return (
		<main className="">
			<div className="left">
				<h1 className="">
					<span aria-hidden="true">02</span> Meet your crew
				</h1>

				<article className="" role="tabpanel" tabIndex="0">
					<header className="">
						<h2 className="">Commander</h2>
						<p className="">Douglas Hurley</p>
					</header>
					<p>
						Douglas Gerald Hurley is an American engineer, former Marine Corps
						pilot and former NASA astronaut. He launched into space for the
						third time as commander of Crew Dragon Demo-2.
					</p>
				</article>

				<picture id="commander-image">
					<source srcSet={Douglas_webp} type="image/webp" />
					<img src={Douglas_png} alt="Douglas Hurley" />
				</picture>
			</div>
		</main>
	);
}

export default Crew;

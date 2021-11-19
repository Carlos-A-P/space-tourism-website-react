import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import Moon_image from "../assets/destination/image-moon.png";
import Moon_webp from "../assets/destination/image-moon.webp";

function Destination(props) {
	useEffect(() => {
		props.changeBG("destination");
	});
	return (
		<div className="">
			{/* <Navbar /> */}
			<main id="main">
				{/* this can be a component */}
				<div className="left">
					{/* aria hidden is so that screen readers don't have to hear the span */}
					<h1 className="">
						<span aria-hidden="true">01</span> Pick your destination
					</h1>

					<picture id="moon-image">
						<source srcSet={Moon_webp} type="image/webp" />
						<img src={Moon_image} alt="the moon" />
					</picture>
				</div>
				<div className="right">
					<div className="" role="tablist" aria-label="destination list">
						<button
							aria-selected="true"
							role="tab"
							aria-controls="moon-tab"
							className=""
							tabIndex="0"
							data-image="moon-image"
						>
							Moon
						</button>
						<button
							aria-selected="false"
							role="tab"
							aria-controls="mars-tab"
							className=""
							tabIndex="-1"
							data-image="mars-image"
						>
							Mars
						</button>
						<button
							aria-selected="false"
							role="tab"
							aria-controls="europa-tab"
							className=""
							tabIndex="-1"
							data-image="europa-image"
						>
							Europa
						</button>
						<button
							aria-selected="false"
							role="tab"
							aria-controls="titan-tab"
							className=""
							tabIndex="-1"
							data-image="titan-image"
						>
							Titan
						</button>
					</div>

					{/* this can be a component */}
					{/* description */}
					<article className="" id="moon-tab" tabIndex="0" role="tabpanel">
						<h2 className="">Moon</h2>

						<p>
							See our planet as you’ve never seen it before. A perfect relaxing
							trip away to help regain perspective and come back refreshed.
							While you’re there, take in some history by visiting the Luna 2
							and Apollo 11 landing sites.
						</p>

						<div className="">
							<div>
								<h3 className="">Avg. distance</h3>
								<p className="">384,400 km</p>
							</div>
							<div>
								<h3 className="">Est. travel time</h3>
								<p className="">3 days</p>
							</div>
						</div>
					</article>
				</div>
			</main>
		</div>
	);
}

export default Destination;

import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import Vehicle_png from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Vehicle_webp from "../assets/technology/image-launch-vehicle-portrait.jpg";

function Technology(props) {
	useEffect(() => {
		props.changeBG("technology");
	});
	return (
		<div>
			{/* <Navbar /> */}
			<main>
				<h1 className="">
					<span aria-hidden="true">03</span> Space Launch 101
				</h1>
				<div className="bottom">
					<div className="tech-description">
						<div className="tabpanel-wrap">
							<div className="number-tab">
								<button className="" aria-selected="true">
									1
								</button>
								<button className="" aria-selected="false">
									2
								</button>
								<button className="" aria-selected="false">
									3
								</button>
							</div>
							{/* this can be a component */}
							<article role="tabpanel" tabIndex="0">
								<header>
									<h2 className="">The Terminology</h2>
									<p className="">Launch Vehicle</p>
								</header>
								<p>
									A launch vehicle or carrier rocket is a rocket-propelled
									vehicle used to carry a payload from Earth's surface to space,
									usually to Earth orbit or beyond. Our WEB-X carrier rocket is
									the most powerful in operation. Standing 150 metres tall, it's
									quite an awe-inspiring sight on the launch pad!
								</p>
							</article>
						</div>
						<picture>
							<source srcSet={Vehicle_png} type="image/webp" />
							<img src={Vehicle_webp} alt="Launch Vehicle" />
						</picture>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Technology;

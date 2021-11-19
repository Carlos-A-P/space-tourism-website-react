import React from "react";
// import Navbar from "../components/Navbar";

function home() {
	return (
		<div>
			{/* <Navbar /> */}
			<main id="main" className="">
				<div>
					<h1 className="">
						So, you want to travel to
						<span className="">Space</span>
					</h1>

					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div>
					<a href="destination.html" className="">
						Explore
					</a>
				</div>
			</main>
		</div>
	);
}

export default home;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
	useEffect(() => {
		props.changeBG("home");
	});
	return (
		<main id="main" className="grid-container grid-container--home">
			<div>
				<h1 className="text-accent fs-500 ff-sans-cond uppercase">
					So, you want to travel to
					<span className="fs-900 ff-serif text-white letter-spacing-1 d-block">
						Space
					</span>
				</h1>

				<p className="page-info text-accent fs-400">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div>
				<Link
					to="/destination"
					className="hover-effect large-button uppercase ff-serif text-dark bg-white"
				>
					Explore
				</Link>
			</div>
		</main>
	);
}

export default Home;

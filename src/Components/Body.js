import React from "react";
import Carousel from "./Carousel";
import Smartphone from "./Smartphone";
import Laptop from "./Laptop";
import Promotion from "./Promotion";

export default function Body() {
	return (
		<div className="bg-dark">
			<Carousel />

			<section id="smartphone" className="container-fluid pt-5 pb-5">
				<h1 className="text-white text-center">BEST SMARTPHONE</h1>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
						<div className="container">
							<Smartphone />
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
						<div className="container">
							<Smartphone />
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
						<div className="container">
							<Smartphone />
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
						<div className="container">
							<Smartphone />
						</div>
					</div>
				</div>
			</section>

			<Laptop />
			<Promotion />
		</div>
	);
}

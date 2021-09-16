import React, { useState, useContext, useEffect } from "react";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../../styles/index.scss";

//create your first component
const Home = () => {
	// let BASENAME = "https://0e60-77-230-204-78.ngrok.io";
	const [responsenumber, setResponsenumber] = useState(null);
	const [error, setError] = useState("");

	function play() {
		let responseOk = false;
		fetch("https://0691-77-230-204-78.ngrok.io/", {
			method: "GET",
			mode: "no-cors"
		})
			// .then(response => {
			// 	response.json();
			// 	console.log(response.json());
			// })
			// .then(response => console.log(response));
			.then(response => {
				responseOk = response.ok;
				console.log("ok");
				return response.json();
			})
			.then(responseJson => {
				if (responseOk) {
					console.log("todo OK");
				} else {
					setError(responseJson.message);
					console.log("Error");
				}
			})
			.catch(error => {
				setError(error.message);
			});
		console.log(error);
	}

	return (
		<div className="text-center mt-1">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img
							src="https://www.chetu.com/img/twilio/partner/twilio-logo.png"
							alt=""
							width="200"
							height="80"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Dropdown
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a
									className="nav-link disabled"
									href="#"
									tabIndex="-1"
									aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-success"
								type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>

			<div className="jumbotron p-4 jumbotron-fluid">
				<h1 className="display-4">Do you want to play?</h1>
				<p className="lead">I know that you are really excited :) </p>
				<hr className="my-4" />
				<p>Press button to get your price</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button"
						onClick={() => play()}>
						Play
					</a>
				</p>
			</div>
		</div>
	);
};

export default Home;

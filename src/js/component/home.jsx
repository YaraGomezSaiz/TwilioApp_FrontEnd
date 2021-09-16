import React, { useState, useContext, useEffect } from "react";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../../styles/index.scss";

//create your first component
const Home = () => {
	let BASENAME = "https://8d2e-77-230-204-78.ngrok.io";
	const [responsenumber, setResponsenumber] = useState(null);
	const [responsetext, setResponsetext] = useState(null);
	const [message, setmessage] = useState("");
	const [messagecolor, setmessagecolor] = useState("");

	function play() {
		setmessage("");
		setmessagecolor("");
		fetch(BASENAME + "/", {
			method: "GET",
			mode: "cors",
			headers: { "Content-Type": "application/json" }
		})
			.then(response => response.json())
			.then(data => {
				setResponsenumber(data.number);
				setResponsetext(data.text);
				if (data.number <= 2) {
					setmessage(
						"Ohhhh sorry bad luck. Press 'Play' to try it again :("
					);
					setmessagecolor("red");
				} else {
					setmessage(
						"Yesss, well done. Check your prize in your mobile phone. :) !!"
					);
					setmessagecolor("green");
				}
			});
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
				<p>Press button to get your prize</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button"
						onClick={() => play()}>
						Play
					</a>
				</p>
				<h1 className={messagecolor}>{message}</h1>
			</div>
		</div>
	);
};

export default Home;

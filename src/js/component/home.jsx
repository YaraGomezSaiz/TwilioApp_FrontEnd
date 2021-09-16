import React, { useState, useContext, useEffect } from "react";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../../styles/index.scss";

//create your first component
const Home = () => {
	let BASENAME = "https://4496-77-230-204-78.ngrok.io";
	const [responsenumber, setResponsenumber] = useState(null);
	const [responsetext, setResponsetext] = useState(null);
	const [message, setmessage] = useState("");
	const [messagecolor, setmessagecolor] = useState("");
	const [phone, setphone] = useState("");
	const [showprize, setshowprize] = useState(false);

	function play() {
		event.preventDefault();
		setshowprize(false);
		setmessage("");
		setmessagecolor("");
		fetch(BASENAME + "/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(phone)
		})
			.then(response => response.json())
			.then(data => {
				setResponsenumber(data.number);
				setResponsetext(data.text);
				if (data.number <= 2) {
					setmessage(
						"  Ohhh sorry bad luck. Press play to try it again"
					);
					setmessagecolor("red far fa-sad-cry");
					setshowprize(false);
				} else {
					setmessage(
						"  Yesss, well done. Check your prize in your mobile phone!!"
					);
					setmessagecolor("green far fa-smile");
					setshowprize(true);
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
							width="180"
							height="90"
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
						id="navbarSupportedContent"></div>
				</div>
			</nav>

			<div className="jumbotron p-4 jumbotron-fluid">
				<h1 className="display-4">Do you want to play?</h1>
				<p className="lead">I know that you are really excited :) </p>
				<hr className="my-4" />

				<p className="lead d-flex">
					<form className="form-inline mx-auto ">
						<div className="form-group mb-2">
							<i className="fas fa-mobile-alt">
								{" "}
								<span className="pl-2">
									Introduce your mobile phone
								</span>
							</i>
						</div>
						<div className="form-group mx-sm-3 mb-2 col-xs-3">
							<input
								type="text"
								className="form-control "
								id="inputPassword2"
								placeholder="Phone number"
								onChange={() => setphone(event.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary btn-lg mb-2"
							href="#"
							role="button"
							onClick={() => play()}>
							Play
						</button>
					</form>
				</p>

				<h1 className={messagecolor}>
					<span className="pl-3">{message}</span>
				</h1>
				{showprize ? (
					<button type="button" className="btn btn-success">
						Show{" "}
					</button>
				) : (
					""
				)}
				<button type="button" className="btn btn-success">
					Show{" "}
				</button>
			</div>
		</div>
	);
};

export default Home;

import { useState } from "react";

const Header = () => {
	const navLinks = [
		{ href: "#section-home", text: "Home" },
		{ href: "#section-about", text: "About" },
		{ href: "#section-resume", text: "Resume" },
		{ href: "#section-portfolio", text: "Portfolio" },
		{ href: "#section-contact", text: "Contact" },
	];

	const [show, setShow] = useState(false);
	return (
		<nav
			className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
			id="pb-navbar"
		>
			<div className="container">
				<button
					className={`navbar-toggler ${show ? "collapsed" : ""}`}
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample09"
					aria-controls="navbarsExample09"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span
						className="navbar-toggler-icon"
						onClick={() => setShow(!show)}
					></span>
				</button>

				<div
					className={`justify-content-md-center collapse navbar-collapse ${show && "show"} `}
					id="navbarsExample09"
				>
					<ul className="navbar-nav">
						{navLinks.map((link) => (
							<li className="nav-item">
								<a className="nav-link" href={link.href} onClick={() => setShow(false)}>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;

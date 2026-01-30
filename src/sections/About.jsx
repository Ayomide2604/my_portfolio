const About = () => {
	return (
		<section className="site-section" id="section-about">
			<div className="container">
				<div className="row mb-5 align-items-center">
					<div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
						<img
							src="img/about_img.jpg"
							alt="Image placeholder"
							className="img-fluid"
						/>
					</div>
					<div className="col-lg-5 pl-lg-5">
						<div className="section-heading">
							<h2>
								About <strong>Me</strong>
							</h2>
						</div>
						<p className="lead">
							Based in Edmonton, Alberta, I’m a technology enthusiast who enjoys
							building things, learning new tools, and solving problems.
						</p>
						<p className="mb-5">
							When I’m not exploring the latest in tech, you’ll find me with a
							good book or planning my next trip — I love reading and traveling
							to discover new ideas, cultures, and perspectives.
						</p>
						<p>
							<a
								href="#section-contact"
								className="btn px-4 py-2 btn-sm smoothscroll me-2"
								style={{ backgroundColor: "#bac964" }}
							>
								Hire Me
							</a>
							<a href="#" className="btn btn-secondary px-4 py-2 btn-sm">
								Download CV
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

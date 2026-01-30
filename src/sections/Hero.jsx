const Hero = () => {
	return (
		<section
			className="site-hero"
			style={{
				backgroundImage: "url(/img/hero_img1.jpg)",
			}}
		>
			<div className="container">
				<div className="row intro-text align-items-center justify-content-center">
					<div className="col-md-10 text-center pt-5">
						<h1 className="site-heading site-animate">
							Hello, I'm <strong className="d-block">Ayomide Olowu</strong>
						</h1>
						<strong className="d-block text-light text-uppercase letter-spacing">
							Data Analyst & Physiotherapist
						</strong>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

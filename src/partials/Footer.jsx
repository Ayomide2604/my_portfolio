const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="row mb-5">
					<p className="col-12 text-center">
						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
						{/* Copyright &copy;{" "}
						<script>document.write(new Date().getFullYear());</script> All
						rights reserved | This template is made with{" "} */}

						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
					</p>
				</div>

				<div className="row mb-5">
					<div className="col-md-12 text-center">
						<p>
							<a
								href="https://www.linkedin.com/in/ayomide-olowu/"
								target="blank"
								className="social-item"
							>
								<span className="">
									<i class="bi bi-linkedin"></i>
								</span>
							</a>
							<a href="mailto:theolowuayo@gmail.com" className="social-item">
								<span className="">
									<i class="bi bi-envelope"></i>
								</span>
							</a>
							<a
								href="https://github.com/Ayomide2604"
								target="blank"
								className="social-item"
							>
								<span className="">
									<i class="bi bi-github"></i>
								</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

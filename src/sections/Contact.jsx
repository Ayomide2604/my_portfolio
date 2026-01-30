const Contact = () => {
	return (
		<section className="site-section" id="section-contact">
			<div className="container">
				<div className="row">
					<div className="col-md-12 mb-5">
						<div className="section-heading text-center">
							<h2>
								Get <strong>In Touch</strong>
							</h2>
						</div>
					</div>

					<div className="col-md-7 mb-5 mb-md-0">
						<form action="" className="site-form">
							<h3 className="mb-5">Get In Touch</h3>
							<div className="form-group">
								<input
									type="text"
									className="form-control px-3 py-3 mb-2"
									placeholder="Your Name"
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control px-3 py-3 mb-2"
									placeholder="Your Email"
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control px-3 py-3 mb-2"
									placeholder="Your Phone"
								/>
							</div>
							<div className="form-group mb-5">
								<textarea
									className="form-control px-3 py-3 mb-2"
									cols="30"
									rows="10"
									placeholder="Write a Message"
								></textarea>
							</div>
							<div className="form-group">
								<input
									type="submit"
									className="btn px-4 py-3"
									value="Send Message"
									style={{ backgroundColor: "#bac964" }}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

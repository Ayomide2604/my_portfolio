import React from "react";

const Resume = () => {
	return (
		<>
			<section className="site-section" id="section-resume">
				<div className="container">
					<div className="row">
						<div className="col-md-12 mb-5">
							<div className="section-heading text-center">
								<h2>
									My <strong>Resume</strong>
								</h2>
							</div>
						</div>

						{/* Education Section */}
						<div className="col-md-12 mb-5">
							<h2 className="mb-4">Education</h2>
							<div className="row">
								<div className="col-12 col-md-6 mb-4">
									<div className="resume-item h-100 p-4">
										<span className="date d-block mb-2">
											<i className="bi-calendar me-2" />
											2023
										</span>
										<h3 className="h4">BCS Level 4 Certificate in IT</h3>
										<p className="text-light mb-0">British Computer Society</p>
									</div>
								</div>

								<div className="col-12 col-md-6 mb-4">
									<div className="resume-item h-100 p-4">
										<span className="date d-block mb-2">
											<i className="bi-calendar me-2" /> 2021
										</span>
										<h3 className="h4">Bachelor of Science</h3>
										<p className="text-light mb-0">University of Lagos</p>
									</div>
								</div>
							</div>
						</div>

						{/* Professional Experience */}
						<div className="col-md-12">
							<h2 className="mb-4">Professional Experience</h2>

							<div className="row">
								{/* Data Annotator */}
								<div className="col-12 col-md-6 mb-4">
									<div className="resume-item h-100 p-4">
										<span className="date d-block mb-2">
											<i className="bi-calendar me-2" /> November 2025 - Present
										</span>
										<h3 className="h4">Data Annotator</h3>
										<p className="text-light mb-3">
											Scale Labs (Contract/Part-Time)
										</p>
										<ul className="list-unstyled">
											<li className="mb-2">
												• Reviewed, classified, and labeled data for AI and
												machine learning projects with high accuracy
											</li>
											<li className="mb-2">
												• Maintained strict adherence to technical guidelines
												and documentation standards
											</li>
											<li className="mb-2">
												• Applied analytical thinking to support performance
												improvement of AI models
											</li>
											<li>
												• Audited data for inconsistencies and errors to ensure
												data integrity
											</li>
										</ul>
									</div>
								</div>

								{/* Physiotherapist */}
								<div className="col-12 col-md-6 mb-4">
									<div className="resume-item h-100 p-4">
										<span className="date d-block mb-2">
											<i className="bi-calendar me-2" /> April 2023 - December
											2024
										</span>
										<h3 className="h4">Physiotherapist</h3>
										<p className="text-light mb-3">
											Lagos University Teaching Hospital (Full-Time)
										</p>
										<ul className="list-unstyled">
											<li className="mb-2">
												• Managed patient records and documentation with 95%
												accuracy and compliance
											</li>
											<li className="mb-2">
												• Coordinated schedules and maintained electronic
												systems to improve workflow efficiency
											</li>
											<li>
												• Prepared detailed reports and ensured timely
												submission to relevant departments
											</li>
										</ul>
									</div>
								</div>

								{/* Intern Physiotherapist */}
								<div className="col-12 col-md-6 mb-4">
									<div className="resume-item h-100 p-4">
										<span className="date d-block mb-2">
											<i className="bi-calendar me-2" /> April 2022 - April 2023
										</span>
										<h3 className="h4">Intern Physiotherapist</h3>
										<p className="text-light mb-3">
											Lagos University Teaching Hospital (Full-Time)
										</p>
										<ul className="list-unstyled">
											<li className="mb-2">
												• Completed clinical rotations with emphasis on accurate
												documentation and reporting
											</li>
											<li className="mb-2">
												• Managed high-volume patient cases using standardized
												protocols
											</li>
											<li>
												• Prepared detailed reports and ensured timely
												submission to relevant departments
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Resume;

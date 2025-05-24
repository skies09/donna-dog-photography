import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import * as Yup from "yup";
import SocialLinks from "../components/socialLinks";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const containerRef = useRef(null);
	const OOS = true; // Out of service
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	function sendEmail(values) {
		emailjs
			.send(
				process.env.REACT_APP_EMAIL_SERVICE_KEY,
				process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
				values,
				process.env.REACT_APP_EMAIL_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setFormSubmitted(true);
					setLoading(false);
				},
				(error) => {
					console.log(error.text);
					setLoading(false);
				}
			);
	}

	const validationSchema = Yup.object({
		user_name: Yup.string(),
		dog_name: Yup.string(),
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		user_mobile: Yup.string().required("Mobile number is required"),
		service: Yup.string().required("Please select a service"),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_name: "",
			dog_name: "",
			user_email: "",
			user_mobile: "",
			service: "",
			message: "",
		};

		const handleSubmit = (values, { setSubmitting }) => {
			setLoading(true);
			console.log(values, "append dog photography onto the message");
			sendEmail(values);
			setSubmitting(false);
		};

		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<div className="relative w-full flex flex-col items-center">
					<Form
						className={`flex flex-col items-center w-full gap-4 ${
							OOS ? "blur-sm pointer-events-none" : ""
						}`}
					>
						<>
							<div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[90%]">
								<div className="flex flex-col w-full lg:w-1/2">
									<label className="text-lg md:text-xl text-colorFour font-bold text-center font-serif opacity-90">
										Name
									</label>
									<Field
										className="w-5/6 h-10 rounded-xl my-2 pl-2 font-serif mx-auto"
										type="text"
										id="user_name"
										name="user_name"
									/>
								</div>
								<div className="flex flex-col w-full lg:w-1/2">
									<label className="text-lg md:text-xl text-colorFour font-bold text-center font-serif opacity-90">
										Dog Name
									</label>
									<Field
										className="w-5/6 h-10 rounded-xl my-2 pl-2 font-serif mx-auto"
										type="text"
										id="dog_name"
										name="dog_name"
									/>
								</div>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorFour font-bold text-center font-serif opacity-90">
									Email
								</label>
								<Field
									className="w-5/6 h-10 rounded-xl my-2 pl-2 font-serif mx-auto"
									type="email"
									id="user_email"
									name="user_email"
								/>
								<ErrorMessage
									className="text-sm text-colorTwo font-bold flex justify-center text-center font-serif"
									name="user_email"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorFour font-bold text-center font-serif opacity-90">
									Mobile
								</label>
								<Field
									className="w-5/6 h-10 rounded-xl my-2 pl-2 font-serif mx-auto"
									type="text"
									id="user_mobile"
									name="user_mobile"
								/>
								<ErrorMessage
									className="text-sm text-colorTwo font-bold flex justify-center text-center font-serif"
									name="user_mobile"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorFour font-bold text-center font-serif opacity-90">
									Service
								</label>
								<Field
									as="select"
									name="service"
									className="w-5/6 h-10 rounded-xl my-2 pl-2 font-serif mx-auto"
								>
									<option value="">Select a service</option>
									<option value="private_photo_shoot">
										Private Photo Shoot
									</option>
									<option value="outdoor_adventure_session">
										Outdoor adventure session
									</option>
									<option value="birthday">Birthday</option>
									<option value="themed_shoot">
										Themed shoot
									</option>
									<option value="other">Other</option>
									<option value="enquiry">
										General enquiry
									</option>
								</Field>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colorFour font-bold text-center font-serif opacity-90">
									Message
								</label>
								<Field
									as="textarea"
									className="w-5/6 h-24 rounded-xl my-2 pl-2 font-serif mx-auto"
									id="message"
									name="message"
									rows="3"
								/>
							</div>

							<button
								className="flex justify-center items-center mx-auto px-4 py-2 bg-colorThree text-colorFour border border-colorFour rounded-xl hover:bg-colorFive hover:text-colorOne hover:border-2 hover:border-solid hover:border-colorOne"
								type="submit"
							>
								Send
							</button>
						</>
					</Form>

					{OOS && (
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
							<div className="bg-[#ffffff] p-6 rounded-xl shadow-md max-w-md text-center relative z-10">
								<h2 className="text-2xl font-semibold mb-2 text-colorFour font-sans">
									Sorry, there are no sessions available at
									the moment.
								</h2>
								<p className="text-lg text-colorFour font-sans font-medium">
									Please check back later. <br />
									Thank you for your understanding.
								</p>
							</div>
						</div>
					)}
				</div>
			</Formik>
		);
	};

	return (
		<div
			className="w-screen overflow-hidden h-[100vh] bg-colorThree"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				className={`pt-8 lg:pt-4 text-2xl lg:text-4xl text-colorFour font-bold flex justify-center text-center font-serif ${
					OOS ? "blur-sm" : ""
				}`}
			>
				Ready to capture your dog's best moments? <br />
				Book a session today!
			</motion.div>

			<div className="pt-2 lg:pt-8 flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/5 mx-auto">
				<motion.div
					className="w-10/12 flex justify-center items-start bg-colorThree h-80 lg:h-96"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<p className="pt-16 lg:pt-28 text-lg lg:text-2xl text-colorFour font-bold flex justify-center text-center font-serif">
							Thanks, I'll get back to you shortly!
						</p>
					)}
				</motion.div>
			</div>
		</div>
	);
}

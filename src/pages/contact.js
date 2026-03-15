import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "../components/socialLinks";

const OOS = true; // Set to false when taking bookings again

export default function Contact() {
	const containerRef = useRef(null);
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
				() => {
					setFormSubmitted(true);
					setLoading(false);
				},
				() => {
					setLoading(false);
				}
			);
	}

	const validationSchema = Yup.object({
		user_name: Yup.string(),
		dog_name: Yup.string(),
		user_email: Yup.string()
			.email("Please enter a valid email address")
			.required("Email is required"),
		user_mobile: Yup.string().required("Phone number is required"),
		service: Yup.string().required("Please select a service"),
		message: Yup.string(),
	});

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
		sendEmail(values);
		setSubmitting(false);
	};

	return (
		<div
			className="w-full min-h-screen bg-colorThree py-12 px-6 lg:px-12"
			ref={containerRef}
			id="contact"
		>
			<div className="max-w-2xl mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-10"
				>
					<h1 className="text-3xl lg:text-4xl font-serif font-semibold text-colorOne mb-3">
						Get in touch
					</h1>
					<p className="text-lg text-colorOne/85 font-sans">
						Ready to capture your dog's best moments? Book a session or send a
						general enquiry.
					</p>
				</motion.div>

				<div className="relative">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form
							className={`flex flex-col gap-5 ${OOS ? "blur-sm pointer-events-none" : ""}`}
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div>
									<label
										htmlFor="user_name"
										className="block text-sm font-medium text-colorOne mb-1"
									>
										Your name
									</label>
									<Field
										id="user_name"
										name="user_name"
										type="text"
										className="w-full h-11 px-4 rounded-xl border border-colorFive bg-colorThree focus:border-colorFour focus:ring-2 focus:ring-colorFour/20 focus:outline-none transition-all font-sans"
									/>
								</div>
								<div>
									<label
										htmlFor="dog_name"
										className="block text-sm font-medium text-colorOne mb-1"
									>
										Dog's name
									</label>
									<Field
										id="dog_name"
										name="dog_name"
										type="text"
										className="w-full h-11 px-4 rounded-xl border border-colorFive bg-colorThree focus:border-colorFour focus:ring-2 focus:ring-colorFour/20 focus:outline-none transition-all font-sans"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="user_email"
									className="block text-sm font-medium text-colorOne mb-1"
								>
									Email <span className="text-colorFour">*</span>
								</label>
								<Field
									id="user_email"
									name="user_email"
									type="email"
									className="w-full h-11 px-4 rounded-xl border border-colorFive bg-colorThree focus:border-colorFour focus:ring-2 focus:ring-colorFour/20 focus:outline-none transition-all font-sans"
								/>
								<ErrorMessage
									name="user_email"
									component="p"
									className="text-sm text-colorTwo mt-1 font-medium"
								/>
							</div>

							<div>
								<label
									htmlFor="user_mobile"
									className="block text-sm font-medium text-colorOne mb-1"
								>
									Phone <span className="text-colorFour">*</span>
								</label>
								<Field
									id="user_mobile"
									name="user_mobile"
									type="tel"
									className="w-full h-11 px-4 rounded-xl border border-colorFive bg-colorThree focus:border-colorFour focus:ring-2 focus:ring-colorFour/20 focus:outline-none transition-all font-sans"
								/>
								<ErrorMessage
									name="user_mobile"
									component="p"
									className="text-sm text-colorTwo mt-1 font-medium"
								/>
							</div>

							<div>
								<label
									htmlFor="service"
									className="block text-sm font-medium text-colorOne mb-1"
								>
									Service <span className="text-colorFour">*</span>
								</label>
								<Field
									as="select"
									id="service"
									name="service"
									className="w-full h-11 px-4 rounded-xl border border-colorFive bg-colorThree focus:border-colorFour focus:ring-2 focus:ring-colorFour/20 focus:outline-none transition-all font-sans"
								>
									<option value="">Select a service</option>
									<option value="private_photo_shoot">Private studio session</option>
									<option value="outdoor_adventure_session">Outdoor adventure session</option>
									<option value="birthday">Birthday & themed shoot</option>
									<option value="themed_shoot">Other themed shoot</option>
									<option value="other">Other</option>
									<option value="enquiry">General enquiry</option>
								</Field>
								<ErrorMessage
									name="service"
									component="p"
									className="text-sm text-colorTwo mt-1 font-medium"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-colorOne mb-1"
								>
									Message
								</label>
								<Field
									as="textarea"
									id="message"
									name="message"
									rows={4}
									className="w-full px-4 py-3 rounded-xl border border-colorFive bg-colorThree focus:border-colorFour focus:ring-2 focus:ring-colorFour/20 focus:outline-none transition-all font-sans resize-none"
								/>
							</div>

							<button
								type="submit"
								disabled={loading}
								className="w-full md:w-auto md:min-w-[140px] h-12 px-6 rounded-full font-semibold bg-colorFour text-white border-2 border-colorFour hover:bg-colorOne hover:border-colorOne transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-colorFour focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
							>
								{loading ? "Sending…" : "Send message"}
							</button>
						</Form>
					</Formik>

					{formSubmitted && (
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							className="absolute inset-0 flex flex-col items-center justify-center bg-colorThree/95 rounded-2xl"
						>
							<FontAwesomeIcon
								icon={faCheckCircle}
								className="text-4xl text-colorFour mb-4"
							/>
							<p className="text-xl font-semibold text-colorOne text-center">
								Thank you for your message.
							</p>
							<p className="text-colorOne/80 text-center mt-1">
								I'll get back to you as soon as possible.
							</p>
						</motion.div>
					)}

					{OOS && (
						<div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px] rounded-2xl">
							<div className="bg-colorThree p-8 rounded-2xl shadow-shadow-elegant max-w-sm text-center border border-colorFive">
								<h2 className="text-xl font-semibold text-colorOne mb-2 font-serif">
									Sessions currently paused
								</h2>
								<p className="text-colorOne/85 font-sans">
									I'm not taking new bookings at the moment. Please check back
									soon or follow me on social media for updates. Thank you for
									your interest.
								</p>
							</div>
						</div>
					)}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					viewport={{ once: true }}
					className="mt-12 pt-8 border-t border-colorFive text-center"
				>
					<p className="text-colorOne/80 font-sans mb-4">Or reach out directly:</p>
					<SocialLinks />
				</motion.div>
			</div>
		</div>
	);
}

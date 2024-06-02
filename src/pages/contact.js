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
	const [formSubmitted, setFormSubmitted] = useState(false);

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
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	const validationSchema = Yup.object({
		user_name: Yup.string(),
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_name: "",
			user_email: "",
			message: "",
		};

		const handleSubmit = (values, { setSubmitting }) => {
            console.log(values, 'append dog photography onto the message')
			sendEmail(values);
			setSubmitting(false);
		};

		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className="flex flex-col justify-start items-start w-full lg:w-10/12">
					<p className="text-lg lg:text-2xl text-colorFour font-bold flex justify-center text-center font-serif">
						Name
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-2 lg:my-4 pl-2"
						type="text"
						id="user_name"
						name="user_name"
					/>
					<p className="text-lg lg:text-2xl text-colorFour font-bold flex justify-center text-center font-serif">
						Email
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-2 lg:my-4 pl-2"
						type="email"
						id="user_email"
						name="user_email"
					/>
					<ErrorMessage
						className="text-sm text-colorTwo font-bold flex justify-center text-center font-serif"
						name="user_email"
						component="div"
					/>
					<p className="text-lg lg:text-2xl text-colorFour font-bold flex justify-center text-center font-serif">
						Message
					</p>
					<Field
						as="textarea"
						className="w-full lg:h-36 z-10 rounded-xl my-2 lg:my-4 pl-2 pt-2"
						id="message"
						name="message"
						rows="3"
					/>
					<button
						className="flex justify-center items-center mx-auto px-4 py-2 bg-colorThree text-colorFour border border-colorFour rounded-xl hover:bg-colorFive hover:text-colorOne hover:border-2 hover:border-solid hover:border-colorOne"
						type="submit"
					>
						Send
					</button>
				</Form>
			</Formik>
		);
	};

	return (
		<div
			className="w-screen overflow-hidden h-screen bg-colorThree"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				className="pt-12 lg:pt-16 text-2xl lg:text-4xl text-colorFour font-bold flex justify-center text-center font-serif"
			>
				Get in touch
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

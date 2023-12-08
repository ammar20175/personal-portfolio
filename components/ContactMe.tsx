import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Props = {};

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export default function ContactMe({}: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:ammar.ahmad6410@gmail.com?subject=${formData.subject}&
		body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
			className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
		>
			<h3 className="absolute ml-6 md:ml-0 top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-5 md:space-y-10 mt-14 md:mt-0">
				<h4 className="text-xl md:text-4xl font-semibold text-center">
					I have got just what you need.{" "}
					<span className="underline decoration-[#F7AB0A]">Lets Talk.</span>
				</h4>

				<div className="space-y-3 md:space-y-7 text-sm md:text-lg">
					<div className="flex items-center justify-center space-x-5 ">
						<PhoneIcon className="text-[#F7AB0A] h-4 w-4 md:h-7 md:w-7 animate-pulse  flex-shrink-0" />
						<p>+971 058 626 0513</p>
					</div>

					<div className="flex items-center justify-center space-x-5 ">
						<EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 md:h-7 md:w-7 animate-pulse flex-shrink-0" />
						<p>ammar.ahmad6410@gmail.com</p>
					</div>

					<div className="flex items-center justify-center space-x-5 ">
						<MapPinIcon className="text-[#F7AB0A] h-4 w-4 md:h-7 md:w-7 animate-pulse flex-shrink-0" />
						<p>123 Dubai street this is dummy address not a real one</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-[20rem] sm:w-[25rem] md:w-[35rem] lg:w-[40rem] mx-auto"
				>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
						<input
							{...register("name", { required: true })}
							placeholder="Name"
							className={`contactInput flex-grow ${errors.name && "invalidInput"}`}
							type="text"
						/>
						<input
							{...register("email", { required: true })}
							placeholder="Email"
							className={`contactInput  flex-grow ${errors.email && "invalidInput"}`}
							type="email"
						/>
					</div>

					<input
						{...register("subject", { required: true })}
						placeholder="Subject"
						className={`contactInput ${errors.subject && "invalidInput"}`}
						type="text"
					/>
					<textarea
						{...register("message", { required: true })}
						placeholder="Message"
						className={`contactInput ${errors.message && "invalidInput"}`}
					/>

					<button
						type="submit"
						className="bg-[#F7AB0A] py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
}

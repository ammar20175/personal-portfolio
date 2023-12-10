import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type Props = {
	pageInfo: PageInfo;
};

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export default function ContactMe({ pageInfo }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (formData) => {
		{
			const id = toast.loading("Sending email...");

			try {
				const response = await emailjs.send(
					process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!,
					process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID!,
					{
						from_name: formData.name,
						email: formData.email,
						subject: formData.subject,
						message: formData.message,
						reply_to: formData.email,
					},
					process.env.NEXT_PUBLIC_MAIL_KEY
				);

				if (response.status === 200) {
					toast.success("Email send.", {
						id: id,
					});
					reset();
				}
			} catch (err) {
				toast.error("An error occured while sending the email.", {
					id: id,
				});
			}
		}
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

			<div className="flex flex-col space-y-5 xl:space-y-10 mt-14 xl:mt-0">
				<h4 className="text-xl md:text-2xl xl:text-4xl font-semibold text-center">
					I have got just what you need.{" "}
					<span className="underline decoration-[#F7AB0A]">Lets Talk.</span>
				</h4>

				<div className="space-y-3 xl:space-y-7 text-sm md:text-base xl:text-lg">
					<div className="flex items-center justify-center space-x-5 ">
						<PhoneIcon className="text-[#F7AB0A] h-4 w-4 md:h-5 md:w-5 xl:h-7 xl:w-7 animate-pulse  flex-shrink-0" />
						<p>{pageInfo.phoneNumber}</p>
					</div>

					<div className="flex items-center justify-center space-x-5 ">
						<EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 md:h-5 md:w-5 xl:h-7 xl:w-7 animate-pulse flex-shrink-0" />
						<p>{pageInfo.email}</p>
					</div>

					<div className="flex items-center justify-center space-x-5 ">
						<MapPinIcon className="text-[#F7AB0A] h-4 w-4 md:h-5 md:w-5 xl:h-7 xl:w-7 animate-pulse flex-shrink-0" />
						<p>{pageInfo.address}</p>
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
							className={`contactInput flex-grow ${
								errors.name && "invalidInput"
							}`}
							type="text"
						/>
						<input
							{...register("email", { required: true })}
							placeholder="Email"
							className={`contactInput  flex-grow ${
								errors.email && "invalidInput"
							}`}
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
						className="bg-[#F7AB0A] py-3 lg:py-5 px-10 rounded-md text-black font-bold md:text-lg xl:text-xl"
					>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
}

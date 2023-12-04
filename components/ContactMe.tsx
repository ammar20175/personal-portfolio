import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
type Props = {};

export default function ContactMe({}: Props) {
	return (
		<div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
			<h3 className="absolute ml-6 md:ml-0 top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">
					I have got just what you need.{" "}
					<span className="underline decoration-[#F7AB0A]">Lets Talk.</span>
				</h4>

				<div className="space-y-10">
					<div className="flex items-center justify-center space-x-5 ">
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p>+123456789</p>
					</div>

					<div className="flex items-center justify-center space-x-5 ">
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p>ammar.ahmad6410@gmail.com</p>
					</div>

					<div className="flex items-center justify-center space-x-5 ">
						<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p>123 Dubai street</p>
					</div>
				</div>

				<form className="flex flex-col space-y-2 w-fit mx-auto">
					<div className="flex space-x-2">
						<input placeholder="Name" className="contactInput" type="text" />
						<input placeholder="Email" className="contactInput" type="email" />
					</div>

					<input placeholder="Subject" className="contactInput" type="text" />
					<textarea placeholder="Message" className="contactInput" />

					<button
						type="submit"
						className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
				About
			</h3>

			<motion.img
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				src="https://images.unsplash.com/photo-1588862081167-d5b98006637e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				className="-mb-20 mt-8 md:mt-0 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96  xl:w-[420px] xl:h-[520px]"
			/>

			<div className="space-y-6 md:space-y-10 px-0 md:px-10">
				<h4 className="text-2xl md:text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
					background
				</h4>

				<p className="text-xs md:text-sm lg:text-lg">
					I am a versatile and passionate Computer Systems Engineer with a
					strong background in full-stack development, specializing in ReactJS,
					NextJS, and NodeJS. My expertise extends to a variety of programming
					languages, including JavaScript, C++, C, and Java. With a profound
					understanding of hardware programming and signal processing, I bring a
					unique perspective to the field. Currently working as a Full Stack
					Developer, I thrive on crafting seamless and efficient solutions that
					span the entire software development lifecycle. My proficiency in
					backend engineering is a testament to my commitment to building
					robust, scalable, and secure applications. Navigating the complexities
					of both frontend and backend technologies, I have successfully
					developed and deployed projects that meet and exceed client
					expectations.
				</p>
			</div>
		</motion.div>
	);
}

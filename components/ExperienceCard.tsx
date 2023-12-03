import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full xl:w-[130px] xl:h-[130px] object-cover object-center"
				src="https://images.unsplash.com/photo-1588862081167-d5b98006637e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-xl md:text-2xl lg:text-4xl font-light">
					CEO of Microsoft
				</h4>

				<p className="font-bold md:text-lg lg:text-2xl mt-1">Microsoft</p>

				<div className="flex space-x-2 my-2">
					<img
						className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full"
						src="https://nodejs.org/static/images/logo.svg"
					/>
					<img
						className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full"
						src="https://nodejs.org/static/images/logo.svg"
					/>
					<img
						className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full"
						src="https://nodejs.org/static/images/logo.svg"
					/>
				</div>

				<p className="uppercase py-2 text-gray-300">
					Started work ... - Ended...
				</p>

				<ul className="list-disc space-y-2 md:space-y-4 ml-5 text-xs md:text-base lg:text-lg">
					<li>
						Summary point Summary point Summary point Summary point Summary
						poina
					</li>
					<li>
						Summary point Summary point Summary point Summary point Summary
						point
					</li>
					<li>
						Summary point Summary point Summary point Summary point Summary
						point
					</li>
				</ul>
			</div>
		</article>
	);
}

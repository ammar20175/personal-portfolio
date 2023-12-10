import { urlFor } from "@/sanity";
import { motion } from "framer-motion";

type Props = {
	skill: Skill;
};

export default function Skill({ skill }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<img
				className="rounded-full border border-gray-500 object-contain w-16 h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 filter
                group-hover:grayscale transition duration-300 ease-in-out"
				src={urlFor(skill.image).url()}
			/>

			<div
				className="absolute opacity-0 z-1 rounded-full group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
                w-16 h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24"
			>
				<div className="flex items-center justify-center h-full">
					<p className="text-xs  md:text-xl xl:text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	);
}

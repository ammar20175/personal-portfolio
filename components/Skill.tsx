import { motion } from "framer-motion";

type Props = {
	directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<img
				className="rounded-full border border-gray-500 object-ontain w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter
                group-hover:grayscale transition duration-300 ease-in-out"
				src="https://logowik.com/content/uploads/images/firebase.jpg"
			/>

			<div
				className="absolute opacity-0 z-1 rounded-full group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
                w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24"
			>
				<div className="flex items-center justify-center h-full">
					<p className="text-xs  md:text-xl xl:text-3xl font-bold text-black opacity-100">
						100%
					</p>
				</div>
			</div>
		</div>
	);
}

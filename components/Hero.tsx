import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hi,My Name is Ammar Ahmad",
			"Guy-who-loves-coffee.tsx",
			"<ButLovesToCodeMore />",
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src="https://images.unsplash.com/photo-1588862081167-d5b98006637e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Computer Systems Engineer
				</h2>

				<h1 className="text-3xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>

					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>

					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>

					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

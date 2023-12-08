import { urlFor } from "@/sanity";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
	projects: Project[];
};

export default function Projects({ projects }: Props) {
	return (
		<div
			className="h-screen relative flex  flex-col overflow-hidden text-left  max-w-full 
		    justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute ml-6 md:ml-0 top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>

			<div
				className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
			scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
			>
				{projects.map((project, i) => (
					<Link key={i} href={project.linkToBuild} target="_blank">
						<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen">
							<motion.img
								initial={{ y: -300, opacity: 0 }}
								transition={{ duration: 1.2 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								className="w-[300px] h-[170px] md:w-[400px] md:h-[250px]"
								src={urlFor(project.image).url()}
							/>

							<div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
								<h4 className="md:text-2xl xl:text-4xl font-semibold text-center">
									<span className="underline decoration-[#F7AB0A]/50">
										Case Study {i + 1} of {projects.length} :
									</span>{" "}
									{project.title}
								</h4>

								<div className="flex items-center justify-center space-x-4">
									{project.technologies.map((technology) => (
										<img
											className="h-10 w-10"
											key={technology._id}
											src={urlFor(technology.image).url()}
										/>
									))}
								</div>
								<p className="xl:text-lg text-center md:text-left">
									{project.summary}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>

			<div className="w-full absolute top[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
		</div>
	);
}

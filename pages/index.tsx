import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import fetchExperience from "@/utils/fetchExperience";
import fetchPageInfo from "@/utils/fetchPageInfo";
import fetchProjects from "@/utils/fetchProjects";
import fetchSkills from "@/utils/fetchSkills";
import fetchSocial from "@/utils/fetchSocials";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	projects: Project[];
	skills: Skill[];
	socials: Social[];
};

export default function Home({
	pageInfo,
	experiences,
	projects,
	skills,
	socials,
}: Props) {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>{pageInfo?.name} - Portfolio</title>
			</Head>

			<Header socials={socials} />

			<section id="hero" className="snap-center">
				<Hero pageInfo={pageInfo} />
			</section>

			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience experiences={experiences} />
			</section>

			<section id="skills" className="snap-start">
				<Skills skills={skills} />
			</section>

			<section id="projects" className="snap-start">
				<Projects projects={projects} />
			</section>

			<section id="contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href="#hero">
				<Footer pageInfo={pageInfo} />
			</Link>

			<Toaster />
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperience();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocial();

	return {
		props: { pageInfo, experiences, skills, projects, socials },
		revalidate: 1000,
	};
};

import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "skill"] | order(_createdAt desc)
`;

const fetchSkills = async () => {
	const skills: Skill[] = await sanityClient.fetch(query);
	return skills;
};

export default fetchSkills;

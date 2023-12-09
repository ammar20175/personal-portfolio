import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "project"] | order(_createdAt desc) {
        ...,
        technologies[]->
    }
`;

const fetchProjects = async () => {
	const projects: Project[] = await sanityClient.fetch(query);
	return projects;
};

export default fetchProjects;

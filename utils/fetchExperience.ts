import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "experience"] | order(_createdAt desc) {
        ...,
        technologies[]->
    }
`;

const fetchExperiences = async () => {
	const experiences: Experience[] = await sanityClient.fetch(query);
	return experiences;
};

export default fetchExperiences;

import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "social"]
`;
const fetchSocials = async () => {
	const socials: Social[] = await sanityClient.fetch(query);
	return socials;
};

export default fetchSocials;

import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "pageInfo"][0]
`;

const fetchPageInfo = async () => {
	const pageInfo: PageInfo = await sanityClient.fetch(query);
	return pageInfo;
};

export default fetchPageInfo;

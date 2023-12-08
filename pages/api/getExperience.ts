import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == "experience"] | order(_createdAt desc) {
        ...,
        technologies[]->
    }
`;

type Data = {
	experiences: Experience[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const experiences: Experience[] = await sanityClient.fetch(query);

	res.status(200).json({ experiences });
}

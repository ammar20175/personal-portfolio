import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == "skill"] | order(_createdAt desc)
`;

type Data = {
	skills: Skill[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const skills: Skill[] = await sanityClient.fetch(query);

	res.status(200).json({ skills });
}

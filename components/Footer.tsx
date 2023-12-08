import { urlFor } from "@/sanity";

type Props = {
	pageInfo: PageInfo;
};

export default function Footer({ pageInfo }: Props) {
	return (
		<footer className="sticky bottom-2 md:bottom-5 w-full cursor-pointer">
			<div className="flex items-center justify-center">
				<img
					className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
					src={urlFor(pageInfo?.profilePic).url()}
				/>
			</div>
		</footer>
	);
}

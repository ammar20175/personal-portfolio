type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="sticky bottom-2 md:bottom-5 w-full cursor-pointer">
			<div className="flex items-center justify-center">
				<img
					className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
					src="https://cdn.sanity.io/images/nhltvvlv/production/3a6dca097e200d9e770118a41808e6029d8ea311-480x480.jpg"
				/>
			</div>
		</footer>
	);
}

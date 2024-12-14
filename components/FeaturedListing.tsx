import Image from "next/image";
import React from "react";
import UnderlinedButton from "./UnderlinedButton";

type Props = {
	image: string,
	name: string
};

const FeaturedListing = ({ image, name }: Props) => {
	return (
		<div className="flex flex-col px-24 py-16 mx-24 my-16">
			<Image src={image} width={600} height={600} alt="" />
			<p className="font-medium text-4xl pb-6 bottom-0">{name}</p>
			<UnderlinedButton>View More</UnderlinedButton>
		</div>
	);
};

export default FeaturedListing;

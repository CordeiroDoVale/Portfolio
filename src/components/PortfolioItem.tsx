import React from "react";

import { PortfolioItemProps } from "../util/interfaces";

function PortfolioItem({
	title,
	imageURL,
	stack,
	link,
	key,
}: PortfolioItemProps) {
	function handleDivClick(event: React.MouseEvent<HTMLDivElement>) {
		event.preventDefault();
		event.stopPropagation();
		window.open(link, "blank")?.focus();
	}

	return (
		<>
			<div
				className="border-2 border-black"
				onClick={handleDivClick}
				key={key}
			>
				<img
					src={`${imageURL}`}
					alt={`Printscrenn of project ${title}`}
					className="w-full h-36 md:h-42 lg:h-48 object-cover cursor-pointer border-2 border-white"
				/>
				<div className="w-full p-4">{title}</div>
				<p className="">
					{stack.map((item) => (
						<span>{item}</span>
					))}
				</p>
			</div>
		</>
	);
}

export default PortfolioItem;

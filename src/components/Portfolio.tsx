import React from "react";

import PortfolioItem from "./PortfolioItem";
//import portfolioData from "../util/data";

const portfolioData = [
	{
		title: "Promptopia",
		imageURL: "",
		stack: ["Next.Js13", "Tailwind", "Typescript"],
		link: "https://promptopia-lake-tau.vercel.app/",
	},
	{
		title: "Promptopia",
		imageURL: "",
		stack: ["Next.Js13", "Tailwind", "Typescript"],
		link: "https://promptopia-lake-tau.vercel.app/",
	},
	{
		title: "Promptopia",
		imageURL: "",
		stack: ["Next.Js13", "Tailwind", "Typescript"],
		link: "https://promptopia-lake-tau.vercel.app/",
	},
];

function Portfolio() {
	const data = portfolioData;
	return (
		<div className=" flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{
					data.map((item) => (
						<PortfolioItem
							imageURL={item.imageURL}
							title={item.title}
							stack={item.stack}
							link={item.link}
							key={item.title}
						/>
					))
					//`typeof ${typeof portfolioData.data}`
				}
			</div>
		</div>
	);
}

export default Portfolio;

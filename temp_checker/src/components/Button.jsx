import React from "react";

export const Button = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className="text-white bg-purple-800 hover:bg-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-800 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-blue-800"
		>
			{children}
		</button>
	);
};

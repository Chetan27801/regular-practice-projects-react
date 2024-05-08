import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<nav className="bg-slate-900 border-gray-500">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					to="/"
					className="self-center text-xl font-semibold text-yellow-500 hover:text-yellow-600 hover:underline"
				>
					Home
				</Link>
				<ul className="font-medium flex p-4 space-x-8">
					<Link
						to="/about"
						className="text-white hover:text-yellow-500 hover:underline"
					>
						<li>About</li>
					</Link>
					<Link
						to="/contact"
						className="text-white hover:text-yellow-500 hover:underline"
					>
						<li>Contact</li>
					</Link>
					<Link
						to="/services"
						className="text-white hover:text-yellow-500 hover:underline"
					>
						<li>Services</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Header;

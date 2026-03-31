import { useState } from "react";
import FotoJeisson from "../assets/FotoJeisson.png";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 w-full backdrop-blur-[10px] md:border-b md:border-(--border) py-4 z-50">
			<div className="max-w-4xl mx-auto w-full flex items-center justify-center text-white gap-x-10">
				<nav
					className={`center font-Onest col-span-full row-[2/3] transition-all duration-400 ease-in-out overflow-hidden md:overflow-visible md:justify-center md:flex group/nav ${
						isOpen ? "max-h-125" : "max-h-0"
					} md:max-h-full`}
				>
					<ul className="flex flex-col items-center overflow-hidden md:flex-row gap-x-10 mr-0 md:mr-4">
						<li className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto ">
							<a
								href="#proyectos"
								onClick={closeMenu}
								className="flex text-lg items-center md:w-auto justify-center gap-2 md:px-4 md:py-2 hover:bg-gray-900 rounded-2xl border border-transparent hover:border-gray-700 transition-all min-h-12.5  px-5 py-4  duration-300 w-full"
							>
								Proyectos
							</a>
						</li>
						<li className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto">
							<a
								href="#experiencia"
								onClick={closeMenu}
								className="flex items-center md:w-auto justify-center gap-2 md:px-4 md:py-2  hover:bg-gray-900 rounded-2xl border border-transparent hover:border-gray-700 transition-all min-h-12.5 text-lg px-5 py-4 duration-300 w-full"
							>
								Experiencia
							</a>
						</li>
						<li className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto">
							<a
								href="#about"
								onClick={closeMenu}
								className="flex items-center md:w-auto justify-center gap-2 md:px-4 md:py-2 hover:bg-gray-900 rounded-2xl border border-transparent hover:border-gray-700 transition-all min-h-12.5 text-lg px-5 py-4 duration-300 w-full"
							>
								Sobre mí
							</a>
						</li>
					</ul>
				</nav>

				<div className="md:hidden absolute right-4 top-4">
					<button
						onClick={toggleNav}
						className="flex items-center justify-center"
					>
						<div className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 cursor-pointer">
							<span className="h-0.5 w-6 bg-white rounded-md" />
							<span className="h-0.5 w-6 bg-white rounded-md" />
							<span className="h-0.5 w-6 bg-white rounded-md" />
						</div>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

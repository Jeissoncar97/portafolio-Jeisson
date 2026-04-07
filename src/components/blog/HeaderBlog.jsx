import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="sticky top-0 z-50  backdrop-blur-[10px] border-b border-(--border) text-sm md:text-lg overflow-hidden">
			<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
				{/* Logo / Nombre */}
				<Link
					to="/"
					className="font-bold text-sm md:text-lg py-2 px-1 md:px-5 md:py-4 rounded-2xl"
				>
					Jeisson.dev
				</Link>

				{/* Navegación */}
				<nav className="flex gap-6 text-sm md:text-lg">
					<Link
						to="/blog"
						className="hover:bg-gray-900 hover:border-gray-700 transition-all  py-2 px-1 smd:px-5 md:py-4  duration-300 w-full border border-transparent rounded-2xl"
					>
						Inicio
					</Link>

					<a
						href="https://app.hackthebox.com/profile/tu-id"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:bg-gray-900 hover:border-gray-700 transition-all  py-2 px-1 smd:px-5 md:py-4  duration-300 w-full border border-transparent rounded-2xl"
					>
						HTB
					</a>

					<Link
						to="/#projects"
						className="hover:bg-gray-900 hover:border-gray-700 transition-all  py-2 px-1 smd:px-5 md:py-4  duration-300 w-full border border-transparent rounded-2xl"
					>
						Portafolio
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;

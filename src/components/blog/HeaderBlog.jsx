import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="sticky top-0 z-50  backdrop-blur-[10px] border-b border-(--border) text-sm md:text-lg overflow-hidden">
			<div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
				{/* Logo / Nombre */}
				<Link
					to="/"
					className="px-1 py-2 text-sm font-bold md:text-lg md:px-5 md:py-4 rounded-2xl"
				>
					Jeisson.dev
				</Link>

				{/* Navegación */}
				<nav className="flex gap-6 text-sm md:text-lg">
					<Link
						to="/blog"
						className="w-full px-1 py-2 transition-all duration-300 border border-transparent hover:bg-gray-900 hover:border-gray-700 sm:px-6 md:py-2 rounded-2xl"
					>
						Inicio
					</Link>

					<a
						href="https://app.hackthebox.com/profile/tu-id"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full px-1 py-2 transition-all duration-300 border border-transparent hover:bg-gray-900 hover:border-gray-700 sm:px-6 md:py-2 rounded-2xl"
					>
						HTB
					</a>

					<Link
						to="/#projects"
						className="w-full px-1 py-2 transition-all duration-300 border border-transparent hover:bg-gray-900 hover:border-gray-700 sm:px-6 md:py-2 rounded-2xl"
					>
						Portafolio
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;

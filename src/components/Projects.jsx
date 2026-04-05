import foroHTB from "../assets/foro-HTB.png";
import SecurityIcon from "../assets/icons/SecurityIcon";
import ArrowIcon from "../assets/icons/ArrowIcon";

const Projects = () => {
	return (
		<section
			id="projects"
			className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl pb-16 md:pb-26"
		>
			<div>
				<h2 className="text-3xl font-bold mb-4 flex items-center gap-2 py-4">
					<SecurityIcon /> Proyectos de ciberseguridad
				</h2>
				<div className="flex flex-col gap-y-16">
					<article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
						<div className="w-full md:w-1/2">
							<div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
								<img
									loading="lazy"
									className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
									src={foroHTB}
									alt="Image foro HTB"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 md:max-w-lg relative">
							<h3 className="text-2xl font-bold text-(--green-htb) mb-4">
								Foro Hack the box
							</h3>
							<div className="mt-2 text-gray-400">
								Resolución de máquinas tipo CTF (Hack The Box) y
								documentación de vulnerabilidades, explotación y
								escalamiento de privilegios mediante writeups
								publicados en foro propio.
							</div>
							<a
								href="/blog"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-4 py-1 transition  border  rounded-full bg-gray-800 border-gray-600 text-(--green-htb) text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black-800 absolute bottom-0 right-0 mb-4 mr-4"
							>
								Ir
								<ArrowIcon />
							</a>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Projects;

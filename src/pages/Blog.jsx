import { Link } from "react-router-dom";
import Hongo from "../assets/image-foro/hongo.svg";
import Profile from "../assets/image-foro/profile.webp";
import bgHTB from "../assets/image-foro/bg-HTB.svg";
import Machines from "../components/Machines";

import Archetype from "../assets/image-foro/machines/archetype.png";

function Blog() {
	return (
		<div className="bg-(--back-ground-primary) text-white mx-auto ">
			<div className="px-4 py-10 xl:px-40">
				<div className="max-w-full mx-auto mb-10">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
						<div className="md:col-span-1 bg-linear-to-br from-(--bg-secondary-blog) to-(--bg-secondary-blog)/10 p-6 rounded-2xl">
							<div className="flex flex-col items-center gap-4">
								<img src={Hongo} alt="" />
								<p className="text-(--text-gray-claro) font-semibold">
									Hack the box rank
								</p>
								<h3 className="text-3xl font-bold">Noob</h3>
								<div className="flex flex-col w-full gap-2">
									<div className="flex justify-between">
										<p>Content Ownership</p>
										<p className="text-(--text-gray-claro)">
											3.05%
										</p>
									</div>
									<div className="relative w-full h-2 rounded-full bg-slate-800">
										<div
											className="absolute top-1/2 -translate-y-1/2 h-2 bg-(--green-htb) rounded-full"
											style={{ width: "3%" }}
										/>
										<div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-(--green-htb) rounded-full"></div>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-2 mt-6">
								<div className="  bg-(--bg-secondary-blog) p-4 rounded-xl">
									<h4 className="font-bold">#969</h4>
									<p className="text-(--text-gray-claro)">
										Global Ranking
									</p>
								</div>
								<div className="flex justify-between">
									<div className="w-1/3 bg-(--bg-secondary-blog) p-4 rounded-xl">
										<h4 className="font-bold">1</h4>
										<p className="text-(--text-gray-claro)">
											Points
										</p>
									</div>
									<div className="w-1/3 ml-2 bg-(--bg-secondary-blog) p-4 rounded-xl">
										<h4 className="font-bold">6</h4>
										<p className="text-(--text-gray-claro)">
											Flags
										</p>
									</div>
									<div className="w-1/3 ml-2 bg-(--bg-secondary-blog) p-4 rounded-xl">
										<h4 className="font-bold">--</h4>
										<p className="text-(--text-gray-claro)">
											Blods
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-around lg:col-span-2 bg-linear-to-br from-(--bg-secondary-blog) to-(--bg-secondary-blog)/10 p-6 rounded-2xl">
							<h2 className="text-(--green-htb) text-xl font-bold mb-4">
								Bienvenido a mi laboratorio ⚡
							</h2>
							<p className="max-w-4xl pb-2">
								Este no es solo un blog, es un espacio donde
								documento mi proceso, mis errores y mis
								aprendizajes en el mundo de la ciberseguridad y
								el hacking ético.
							</p>
							<p className="max-w-4xl pb-2">
								Aquí encontrarás writeups de máquinas, análisis
								de vulnerabilidades y distintas formas de
								abordar problemas reales, siempre desde una
								perspectiva práctica. No se trata solo de llegar
								a la solución, sino de entender el camino,
								cuestionar cada paso y mejorar constantemente.
							</p>
							<p className="max-w-4xl pb-2">
								Mi objetivo con este sitio es simple: aprender
								haciendo y compartirlo contigo. Si estás
								empezando, esto puede servirte como guía. Si ya
								tienes experiencia, quizás encuentres nuevas
								formas de pensar.
							</p>
							<p className="max-w-4xl pb-2">Bienvenido. 🚀</p>
							<h2 className="text-(--green-htb) text-xl font-bold mb-4">
								Season 10 Progress
							</h2>
							<div className="bg-(--bg-secondary-blog) p-4 rounded-xl">
								<div className="flex flex-col justify-between py-4 sm:flex-row">
									<div className="px-4 mb-10 border-b border-gray-400 sm:border-b-0 sm:px-0">
										<h4 className="font-bold">--</h4>
										<p className="text-(--text-gray-claro)">
											Seasson 10 Rank
										</p>
									</div>
									<div className="flex">
										<div className="px-4">
											<p className="text-(--text-gray-claro)">
												Points
											</p>
											<h4 className="font-bold">--</h4>
										</div>
										<div className="px-4">
											<p className="text-(--text-gray-claro)">
												User Solves
											</p>
											<h4 className="font-bold">--</h4>
										</div>
										<div className="px-4">
											<p className="text-(--text-gray-claro)">
												System Solves
											</p>
											<h4 className="font-bold">--</h4>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end justify-between lg:flex-row">
									<div className="flex gap-4">
										<div className="flex items-center justify-center w-24 h-24 ">
											<img
												src={bgHTB}
												alt=""
												className=""
											/>
											<img
												src={Profile}
												alt="profile"
												className="absolute object-cover w-12 h-12 rounded-full"
											/>
										</div>
										<div className="flex flex-col justify-center">
											<p className="text-xl">Unranked</p>
											<h3 className="text-3xl font-semibold">
												hassam68
											</h3>
										</div>
									</div>
									<div className="content-center mx-4 my-4 lg:my-0">
										<a
											href="https://app.hackthebox.com/users/2404047"
											className="text-sm font-bold px-6 py-3 bg-[#262f40] hover:bg-[#2f3b4e] rounded-md transition-colors duration-300"
										>
											View Profile
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Machines
					machines={[
						
						{
							img: Archetype,
							name: "archetype",
							difficulty: "Very Easy",
							os: "Windows",
							rating: "4.1",
							userSolves: "540",
							systemSolves: "354",
							date: "2026-11-04",
							values: [20, 30, 80, 70, 60, 25, 20, 5, 5, 5],
						},
					]}

				/>
			</div>
		</div>
	);
}

export default Blog;

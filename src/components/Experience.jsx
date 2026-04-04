import ExperienceIcon from "../assets/icons/ExperienceIcon";

function Experience() {
	return (
		<section
			id="experience"
			className="section pb-16 md:pb-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
		>
			<h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white undefined -mx-3.5 ">
				<ExperienceIcon /> Experiencia laboral
			</h2>
			<ol className="relative border-s border-default border-(--green-htb)">
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -inset-s-1.5 border border-buffer text-(--green-htb) bg-(--green-htb)"></div>

					<div className="relative mx-12 pb-12 grid before:absolute  before:block before:h-full md:grid-cols-5 md:gap-10 md:space-x-4]">
						<div className="relative pb-12 md:col-span-2">
							<h3 className="text-xl font-bold text-(--green-htb) my-2">
								Administrador
							</h3>
							<h4 className="font-semibold text-xl text-white">
								Fox Pizza
							</h4>
							<time className="p-0 m-0 text-sm text-white/80">
								Actualmente
							</time>
						</div>
						<p className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
							Soporte técnico básico a equipos y sistemas de
							facturación, resolución de incidencias en tiempo
							real y gestión de registros digitales.
							Implementación de mejoras en la red del
							establecimiento para mayor seguridad y estabilidad.
							Coordinación operativa y priorización de tareas bajo
							presión, con enfoque en continuidad del servicio.
						</p>
					</div>
				</li>

				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -inset-s-1.5 border border-buffer text-(--green-htb) bg-(--green-htb)"></div>

					<div className="relative mx-12 pb-12 grid before:absolute  before:block before:h-full md:grid-cols-5 md:gap-10 md:space-x-4]">
						<div className="relative pb-12 md:col-span-2">
							<h3 className="text-xl font-bold text-(--green-htb) my-2">
								Desarrollador web freelancer
							</h3>
							<h4 className="font-semibold text-xl text-white">
								Freelancer
							</h4>
							<time className="p-0 m-0 text-sm text-white/80">
								Actualmente
							</time>
						</div>
						<p className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
							He desarrollado varios proyectos web para clientes,
							incluyendo sitios de restaurantes. Mi enfoque
							principal es crear sitios web atractivos y
							funcionales que satisfagan las necesidades de mis
							clientes, desde el 2019.
						</p>
					</div>
				</li>
			</ol>
		</section>
	);
}

export default Experience;

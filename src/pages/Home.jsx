import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

function Home() {
	return (
		<div className="bg-(--back-ground-primary) text-white mx-auto">
			<div className="mx-auto">
				<Header />
				<div className="px-4">
					<Hero />
					<Projects />
					<Experience />
					<AboutMe />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Home;

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

function App() {
	return (
		<div className=" bg-(--back-ground-primary) text-white mx-auto ">
			<div className="mx-auto">
				<Header />
				<div className="px-4">
					<Hero />

					<Experience />
				</div>
			</div>
		</div>
	);
}

export default App;

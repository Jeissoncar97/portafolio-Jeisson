import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./components/blog/Post";
import BlogLayout from "./components/blog/layoute/BlogLayout";
import "highlight.js/styles/github-dark.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/blog" element={<BlogLayout />}>
					<Route index element={<Blog />} />
					<Route path="/blog/:slug" element={<Post />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

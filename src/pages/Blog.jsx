import { Link } from "react-router-dom";
import { posts } from "../data/posts";

function Blog() {
	return (
		<div className="bg-(--back-ground-primary) text-white mx-auto">
			<div className="p-4 ">
			<h1 className="text-3xl font-bold mb-4">Blog 🚀</h1>

			{posts.map((post) => (
				<div key={post.slug} className="mb-6 border-b pb-4">
					<h2 className="text-xl font-semibold">{post.title}</h2>
					<p className="text-sm opacity-70">{post.date}</p>
					<p className="mt-2">{post.excerpt}</p>

					{/* 👇 AQUÍ VA EL LINK */}
					<Link
						to={`/blog/${post.slug}`}
						className="text-green-400 mt-2 inline-block"
					>
						Leer más →
					</Link>
				</div>
			))}
		</div>
		</div>
	);
}

export default Blog;

import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../../Posts/posts";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import CodeBlock from "../CodeBlock";

export default function Post() {
	const { slug } = useParams();
	const content = posts[slug];

	if (!content) return <p>Post no encontrado</p>;

	return (
		// Añadimos 'prose-headings:font-bold' y revisamos las clases
		<div className="min-h-screen py-10 bg-slate-900">
			{" "}
			{/* Contenedor de fondo para que luzca el prose-invert */}
			<article
				className="max-w-4xl px-4 mx-auto prose prose-invert prose-slate prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-img:rounded-xl prose-h1:text-center"
			>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={{
						img: ({ src, alt }) => (
							<img
								src={src}
								alt={alt}
								className="w-full mx-auto my-4 rounded-xl"
							/>
						),
						pre: CodeBlock,
					}}
				>
					{content}
				</ReactMarkdown>
			</article>
		</div>
	);
}

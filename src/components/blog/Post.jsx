import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../../Posts/posts";
import rehypeHighlight from "rehype-highlight";

export default function Post() {
  const { slug } = useParams();

  const content = posts[slug];

  if (!content) {
    return <p>Post no encontrado</p>;
  }

  return (
    <div className="prose prose-invert max-w-4xl mx-auto p-6">
      <ReactMarkdown  rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
    </div>
  );
}
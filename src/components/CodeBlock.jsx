import { useState } from "react";

export default function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false);

  // --- FUNCIÓN PARA EXTRAER TEXTO ---
  const extractText = (node) => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (node?.props?.children) return extractText(node.props.children);
    return "";
  };

  // Obtenemos el texto plano recorriendo los hijos del <pre>
  const codeToCopy = extractText(children);

  const handleCopy = () => {
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute z-10 px-2 py-1 text-xs text-white transition-colors bg-gray-700 rounded cursor-pointer top-7 right-4 hover:bg-gray-600"
      >
        <span className="material-symbols-outlined text-sm!">
          {copied ? "check" : "content_copy"}
        </span>
      </button>

      {/* No modifiques el renderizado, solo lo que pasas al portapapeles */}
      <pre className="overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}
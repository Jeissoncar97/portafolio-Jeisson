import Barras from "./Barras";
import { Link } from "react-router-dom";

const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export default function MachineRow(props) {
  return (
    <tr className="border-b border-gray-800 hover:bg-[#1a2332] transition">
      <td className="p-4 flex items-center gap-3">
        <div className="w-12 h-12 min-w-12 min-h-12 bg-gray-600 rounded-full">
          <img src={props.img} alt="machine" />
        </div>

        <div>
          <Link
            to={`/blog/${createSlug(props.name)}`}
            className="font-semibold hover:text-(--green-htb) transition"
          >
            {props.name}
          </Link>

          <p className="text-xs text-gray-400">
            {props.difficulty} - {props.os}
          </p>
        </div>
      </td>

      <td className="p-4">
        <Barras values={props.values} />
      </td>

      <td className="p-4">{props.rating}</td>
      <td className="p-4 text-gray-400">{props.userSolves}</td>
      <td className="p-4 text-gray-400">{props.systemSolves}</td>
      <td className="p-4 text-gray-400">{props.date}</td>
    </tr>
  );
}
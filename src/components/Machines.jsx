import MachineRow from "./MachineRows";

export default function MachinesTable({ machines }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 text-sm border-b border-gray-700">
            <th className="p-4">Maquina</th>
            <th className="p-4">Dificultad</th>
            <th className="p-4">Clasificación</th>
            <th className="p-4">User flag</th>
            <th className="p-4">System Flag</th>
            <th className="p-4">Fecha de solucion</th>
          </tr>
        </thead>

        <tbody>
          {machines.map((machine, index) => (
            <MachineRow key={index} {...machine} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
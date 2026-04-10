const ActivityBars = ({
  values = [],
  maxHeight = 40,
}) => {
  // Asegurar que siempre haya 10 barras
  const normalizedValues = [...values];

  while (normalizedValues.length < 10) {
    normalizedValues.push(0);
  }

  const getColor = (index) => {
    if (index < 3) return "bg-lime-400";   // verdes
    if (index < 7) return "bg-orange-400"; // naranjas
    return "bg-red-500";                  // rojas
  };

  return (
    <div className="flex items-end gap-1.75 h-12">
      {normalizedValues.slice(0, 10).map((value, index) => {
        // clamp para evitar errores
        const safeValue = Math.max(0, Math.min(100, value));
        const height = (safeValue / 100) * maxHeight;

        return (
          <div
            key={index}
            className={`w-1 rounded-sm ${getColor(index)} transition-all duration-300`}
            style={{ height: `${height}px` }}
          />
        );
      })}
    </div>
  );
};

export default ActivityBars;
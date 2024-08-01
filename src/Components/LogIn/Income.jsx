const data = [
  { label: "Ju", value: 3000 },
  { label: "Au", value: 4000 },
  { label: "Se", value: 2000 },
  { label: "Oc", value: 5000 },
  { label: "No", value: 1000 },
  { label: "De", value: 3500 },
];

const maxValue = 5000;

const BarGraph = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[500px] mx-auto mb-12 mt-12">
      <h2 className="mb-4 text-2xl font-bold text-center">Income</h2>
      <div className="relative flex flex-col items-center w-full h-64">
        {/* Y-axis labels and dotted lines */}
        <div className="absolute left-0 w-full h-full">
          {Array.from({ length: 6 }).map((_, index) => {
            const value = `$${index * 1}k`;
            const yPos = (index / 5) * 100;
            return (
              <div
                key={index}
                className="absolute left-0 flex items-center w-full"
                style={{ bottom: `${yPos}%` }}
              >
                <div className="w-12 text-right text-sm text-gray-600">
                  {value}
                </div>
                <div className="flex-grow border-t border-dotted border-gray-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bars */}
        <div className="flex w-full justify-center h-full pt-4">
          {data.map((item, index) => {
            const height = (item.value / maxValue) * 100;
            const barColor =
              index === data.length - 2
                ? "bg-[#FF8227]"
                : index === data.length - 1
                ? "bg-[#FF8227]"
                : "bg-[#FFEACB]";
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-end w-12 h-full"
              >
                <div
                  className={`w-7 rounded-t z-[2] ${barColor}`}
                  style={{ height: `${height}%` }}
                ></div>
                <div className="mb-[0px] text-sm text-gray-700">
                  <p className="mb-[-10px]">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BarGraph;

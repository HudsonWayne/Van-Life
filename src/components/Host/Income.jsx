

import "./Income.css";

const data = [
  { label: "Ju", value: 3000 },
  { label: "Au", value: 4000 },
  { label: "Se", value: 2000 },
  { label: "Oc", value: 5000 },
  { label: "No", value: 1000 },
  { label: "De", value: 3500 },
];

const maxValue = 5000;

const money = [
  { text: "$720", date: "1/12/22 " },
  { text: "$560", date: "10/11/22" },
  { text: "$980", date: "23/11/22" },
];

const BarGraph = () => {
  return (
    <div className="p-6 sm:block md:hidden bg-[#FFF7ED] rounded-lg shadow-md w-full  mb-12 mt-12">
      <div className="flex gap-4 flex-col justify-center w-full min-h-[200px] ">
        <h2 className=" text-2xl font-bold">Income</h2>
        <p>
          Last <span className="underline">30 days</span>
        </p>
        <h1 className="text-4xl font-bold mb-4">$2,260</h1>
      </div>
      <div className="relative flex ml-[-24px] flex-col items-center w-full h-64">
        {/* Y-axis labels and dashed lines */}
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
                <div
                  className="flex-grow"
                  style={{
                    borderTop: "1px dashed #D1D5DB", // Tailwind gray-300 color
                    borderWidth: "1px",
                    borderStyle: "dashed",
                    borderColor: "#D1D5DB",
                    borderDasharray: "8, 4", // Custom dash pattern: 8px dash, 4px space
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bars */}
        <div className="flex w-full justify-center h-full ml-11 pt-4">
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
                  <p className="mb-[-11px]">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* transaction */}
      <div className="flex flex-col justify-center pl-7 pb-5 ml-[-25px] pt-5 ">
        <div className="flex justify-between items-center w-full ">
          <h3 className="font-bold">Your Transactions(3)</h3>
          <p>
            Last <span className="underline">30 days</span>
          </p>
        </div>
        <div className="mt-4">
          {money.map((dollar) => {
            return (
              <div
                key={dollar.id}
                className="flex justify-between items-center w-full py-2"
              >
                <div className="flex justify-between items-center w-full bg-white p-4 rounded-lg border-none ">
                  <p className="text-3xl font-bold">{dollar.text}</p>
                  <p className="">{dollar.date}</p>
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


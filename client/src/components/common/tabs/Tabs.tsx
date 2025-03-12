import { memo } from "react";

type TTabs = {
  tabs: string[];
  tabHandler: (tab: string) => void;
  activeTab: string;
};

const Tabs = memo(({ tabs, tabHandler, activeTab }: TTabs) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex items-center gap-4 justify-center border bg-gray-100 border-gray-100 px-6 py-3 rounded-full">
        {tabs.map((tab, idx) => (
          <span
            key={idx}
            className={`text-2xl font-semibold capitalize cursor-pointer px-6 py-1.5 rounded-full transition-all duration-300 ${
              tab === activeTab ? "bg-white text-black shadow" : "text-gray-500"
            }`}
            onClick={() => tabHandler(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
});

export default Tabs;

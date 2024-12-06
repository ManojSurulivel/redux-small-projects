import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../../../redux/slices/tabSlice";

const TabNavigation = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.activeTab);

  const tabs = [
    { id: "tab1", label: "Tab 1" },
    { id: "tab2", label: "Tab 2" },
    { id: "tab3", label: "Tab 3" },
  ];

  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => dispatch(setActiveTab(tab.id))}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;

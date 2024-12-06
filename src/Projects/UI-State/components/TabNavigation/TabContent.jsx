import React from "react";
import { useSelector } from "react-redux";

const TabContent = () => {
  const activeTab = useSelector((state) => state.tabs.activeTab);

  const content = {
    tab1: "This is the content for Tab 1.",
    tab2: "This is the content for Tab 2.",
    tab3: "This is the content for Tab 3.",
  };

  return <div className="tab-content">{content[activeTab]}</div>;
};

export default TabContent;

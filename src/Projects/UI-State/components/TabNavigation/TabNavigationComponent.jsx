import React from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import TabContent from "../../components/TabNavigation/TabContent"


const TabNavigationComponent = () => {
  return (
    <div className="app">
      <h1>Tab Navigation with React & Redux</h1>
      <TabNavigation />
      <TabContent />
    </div>
  );
};



export default TabNavigationComponent;

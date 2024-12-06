import React from "react";
import NotificationList from "./NotificationList";
import NotificationControls from "./NotificationControls";
import '/Users/manoj/Documents/Redux-small-projects/src/Projects/UI-State/components/NotificationSystem/NotificationSystemComponet.css'

const NotificationSystemComponent = () => {
  return (
    <div className="app">
      <h1>Notification System</h1>
      <NotificationControls />
      <NotificationList />
    </div>
  );
};

export default NotificationSystemComponent;

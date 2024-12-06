import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../redux/slices/notificationSlice";

const NotificationControls = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleAddNotification = () => {
    if (message.trim()) {
      dispatch(addNotification({ message }));
      setMessage("");
    }
  };

  return (
    <div className="notification-controls">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter notification message"
      />
      <button onClick={handleAddNotification}>Add Notification</button>
    </div>
  );
};

export default NotificationControls;

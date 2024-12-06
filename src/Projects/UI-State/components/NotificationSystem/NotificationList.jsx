import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsRead, removeNotification } from "../../../../redux/slices/notificationSlice";

const NotificationList = () => {
  const notifications = useSelector((state) => state.notifications.notifications);
  const dispatch = useDispatch();

  return (
    <div className="notification-list">
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${
              notification.read ? "read" : "unread"
            }`}
          >
            <p>{notification.message}</p>
            <div className="notification-actions">
              {!notification.read && (
                <button
                  onClick={() => dispatch(markAsRead(notification.id))}
                >
                  Mark as Read
                </button>
              )}
              <button onClick={() => dispatch(removeNotification(notification.id))}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;

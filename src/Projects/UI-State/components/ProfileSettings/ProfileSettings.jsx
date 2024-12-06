import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../redux/slices/profileSlice";

const ProfileSettings = () => {
  const profile = useSelector((state) => state.profile);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [theme, setTheme] = useState(profile.preferences.theme);
  const [notifications, setNotifications] = useState(
    profile.preferences.notifications
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        name,
        email,
        preferences: {
          theme,
          notifications,
        },
      })
    );
    alert("Profile updated successfully!");
  };

  return (
    <form className="profile-settings" onSubmit={handleSubmit}>
      <h2>Profile Settings</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="theme">Theme:</label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileSettings;

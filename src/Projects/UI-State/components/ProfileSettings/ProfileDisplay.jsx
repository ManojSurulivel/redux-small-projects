import React from "react";
import { useSelector } from "react-redux";

const ProfileDisplay = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="profile-display">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Theme:</strong> {profile.preferences.theme}</p>
      <p>
        <strong>Notifications:</strong>{" "}
        {profile.preferences.notifications ? "Enabled" : "Disabled"}
      </p>
    </div>
  );
};

export default ProfileDisplay;

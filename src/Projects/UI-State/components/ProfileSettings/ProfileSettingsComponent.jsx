import React from "react";
import ProfileSettings from "./ProfileSettings";
import ProfileDisplay from "./ProfileDisplay";

const ProfileSettingsComponent = () => {
  return (
    <div className="app">
      <h1>Profile Settings</h1>
      <ProfileSettings />
      <ProfileDisplay />
    </div>
  );
};

export default ProfileSettingsComponent;

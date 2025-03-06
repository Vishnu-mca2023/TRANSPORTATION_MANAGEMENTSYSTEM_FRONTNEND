import React from "react";
import Button from "react-bootstrap/Button";
import "./ProfilePage.css";
import img from "../assets/male1.png"
function ProfilePage() {
  // Sample profile information
  const profile = {
    name: "Admin",
    email: "admin@gmail.com",
    bio: "Transportation admin",
    // Add more profile information as needed
  };

  return (
    <div className="profile-container">
      <span className="profile-title">AdminProfile</span>
      <img
        src={img}
        alt=""
        className="profile-image"
      />
      <div className="profile-details">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
        {/* Add more profile information display here */}
      </div>
      <Button variant="primary">Edit Profile</Button>
    </div>
  );
}

export default ProfilePage;

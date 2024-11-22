import React from "react";
import { useParams, Link } from "react-router-dom";

const ProfileDetail = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={profile.image}
        alt={`${profile.name}'s profile`}
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <h2>{profile.name}</h2>
      <p>{profile.details}</p>
      <Link to="/" style={{ marginTop: "20px", display: "block", color: "#007BFF" }}>
        Back to Home
      </Link>
    </div>
  );
};

export default ProfileDetail;

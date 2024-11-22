import React from "react";
import PropTypes from "prop-types";
import "./ProfileCard.css"; // Optional: CSS for styling

const ProfileCard = ({ name, image, description }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-card__image" />
      <h2 className="profile-card__name">{name}</h2>
      <p className="profile-card__description">{description}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProfileCard;

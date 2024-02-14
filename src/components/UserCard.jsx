import React from "react";

const PICSUM_URL = "https://picsum.photos/200/300";

const UserCard = ({ user }) => {
  const cardStyle = {
    backgroundColor: user.hair_color,
  };

  return (
    <div className="card" style={cardStyle}>
      <img
        src={`${PICSUM_URL}?random=${user.name}`}
        alt={user.name}
        className="card-img"
      />
      <div className="container">
        <h3>{user.name}</h3>
        <p>Hair Color : {user.hair_color}</p>
        <p>Skin Color : {user.skin_color}</p>
        <p>Gender : {user.gender}</p>
        <p>Vehicles : {user.vehicles.length}</p>
      </div>
    </div>
  );
};

export default UserCard;

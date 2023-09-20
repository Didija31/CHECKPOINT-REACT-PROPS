import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";

function JoueurItem({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        boxShadow: "15px 0 20px -3px",
        margin: " 40px",
      }}
    >
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body" style={{ background: "#FBF4DB" }}>
        <h5
          className="card-title"
          style={{
            fontFamily: "cursive",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {name}
        </h5>
        <br />
        <p className="card-text" style={{ fontFamily: "cursive" }}>
          Équipe : {team}
          <br />
          Nationalité : {nationality}
          <br />
          Numéro de maillot : {jerseyNumber}
          <br />
          Âge : {age}
        </p>
      </div>
    </div>
  );
}

export default JoueurItem;

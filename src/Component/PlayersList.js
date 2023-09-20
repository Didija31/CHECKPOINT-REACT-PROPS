import React from "react";
import JoueurItem from "./Joueur";
import MainContainer from "./MainContainer";

const PlayersList = () => {
  return (
    <div className="container">
      <div className="row">
        {MainContainer.map((joueur, id) => (
          <div key={id} className="col-md-4">
            <JoueurItem {...joueur} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersList;

import React from "react";
import PlayersList from "./Component/PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          textDecoration: "none",
          background: "#2F5488",
          color: "#FBF4DB",
          marginBottom: "70px",
          fontFamily: "cursive",
        }}
      >
        Cartes de Joueurs FIFA
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;

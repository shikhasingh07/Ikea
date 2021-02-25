import React from "react";
import spaceship from "./assets/spaceship.png";
import "./Style.css";
const HomeScreen = (props) => (
  <div style={{ padding: "20px" }}>
    <div className="content-wrapper">
      <div className="image">
        <img src={spaceship} />
        <div style={{ display: "block" }}>
          <h3>Shopping bag</h3>
          <p style={{ marginTop: "1em" }}>
            Your shopping bag is currently empty
          </p>
        </div>
        <div>
          <button className="btn">Browse products</button>
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  </div>
);
export default HomeScreen;

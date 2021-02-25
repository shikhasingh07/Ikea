import React from "react";
import "./Style.css";

const Main = () => (
  <main className="main">
    <div className="Card">
      <div className="wrapper">
        <h2>Shopping bag</h2>
        <p>
          <a href="#">Sign up or log in </a>
          &nbsp; for faster easier checkout
        </p>
      </div>
      <div className="aval">
        <button className="btn">Check products availability</button>
      </div>
    </div>
  </main>
);

export default Main;

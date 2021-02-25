import React from "react";
// import "./Modal.css";
// import "./Style.css";
import dustbin from "./assets/dustbin.svg";

const WishList = (props) => {
  return (
    <div className="Wish-container">
      <div className="wish-list">
        <img className="wish-image" src={props.src} />
        <div className="wishList-text">
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p id="articl">
            <span>
              <span id="sp">AR No:</span>
              {props.article}
            </span>
          </p>
          <div className="Wish-Price">
            <p>SR : {props.price}</p>
          </div>
          <div className="btn-xon">
            <button
              className="btn-Wish"
              onClick={() => props.MoveToBag(props.index, props.article)}
            >
              Add In Bag
            </button>
            <div className="dele-button">
              <button
                className="dele"
                onClick={() => {
                  props.onDele(props.index);
                }}
              >
                <img src={dustbin} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishList;

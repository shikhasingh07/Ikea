import React from "react";
import checklists from "./assets/checklists.svg";
import basket from "./assets/basket.svg";
import user from "./assets/user.svg";
import "./Style.css";
const Nav = (props) => (
  <nav className="Nav">
    <div className="flex">
      <div className="flex-row left">
        <ul className="Nav-ul">
          <li>
            <img
              src="https://securema2.ikea.com/sa/en/shoppingbag/assets/images/ikea-logo.svg"
              alt=""
            />
          </li>
          <div className="flex-row left left-con">
            <li>Products</li>
            <li>Rooms</li>
            <li>IDEAS</li>
            <li>What's new</li>
          </div>
        </ul>
      </div>
      <div className="flex-row right">
        <ul className="Nav-ul">
          <li className="langaguge">
            <a>
              <strong> العربية </strong>
            </a>
          </li>
          <div className="hover-con">
            <li className="item">
              <a>
                <img width="17px" src={user} alt="IKEA" title="IKEA" />
              </a>
            </li>
            <li className="item shopping-list">
              <a>
                <img src={checklists} alt="IKEA" title="IKEA" />
              </a>
            </li>
            <li className="item">
              <a>
                <img
                  src={basket}
                  alt="Wishlist"
                  title="Wishlist"
                  onClick={props.show}
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
);
export default Nav;

import React, { useState } from "react";
import "./Style.css";
import "./Modal.css";
import dustbin from "./assets/dustbin.svg";
import heart from "./assets/heart.svg";
import Modal from "react-modal";
const Card = (props) => {
  const [modalIsopen, setModalIsOpen] = useState(false);
  const option = [];
  for (let i = 1; i < 60; i++) {
    option.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const per = props.price;
  const qu = props.qty;
  // let disc = Math.round((per / 100).toFixed(2) * 30);
  // let discountPrice = disc * qu;
  let pr = per * qu;
  return (
    <div className="main-content">
      <div className="product">
        <div className="image-container">
          <img src={props.src} />
        </div>
        <div className="content-text">
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.article}</p>
          <div className="Price">
            <p>SR {props.price}</p>
          </div>
        </div>
        <p
          style={{
            marginLeft: "auto",
          }}
          onChange={(e) => {
            props.increseQty(props.index, parseInt(e.target.value));
          }}
        >
          <strong>
            SR {pr}
            {/* {props.qty < 5 ? pr : discountPrice} */}
          </strong>
        </p>
      </div>
      <div className="select-btn sel">
        <div className="Item-select">
          <select
            name="selectedOption"
            onChange={(e) => {
              props.increseQty(props.index, parseInt(e.target.value));
            }}
            defaultValue="1"
          >
            {option}
          </select>
        </div>
        <div className="btn-img">
          <button className=" btn-delete" onClick={() => setModalIsOpen(true)}>
            <img src={dustbin} />
          </button>
          <Modal
            className="Modal"
            isOpen={modalIsopen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <p id="modal-p">Are You Sure Want To delete ?</p>
            <div className="product">
              <div className="image-container">
                <img src={props.src} />
              </div>
              <div className="content-text">
                <h4>{props.title}</h4>
                <p>{props.content}</p>
                <p>{props.article}</p>
                <p>SR {props.price}</p>
              </div>
            </div>
            <div className="btn-modal">
              <button
                className="btn sure btn-modal"
                onClick={() => {
                  props.onDelete(props.index);
                }}
              >
                Yes, I Am sure
              </button>
              <button
                className="btn cancel btn-modal"
                onClick={() => setModalIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
        <div className="btn-img">
          <button
            className="btn-delete"
            onClick={() => props.wishlist(props.index, props.article)}
          >
            <img src={heart} />
          </button>
        </div>
      </div>
    </div>
  );
};
// }

export default Card;
// constructor(props) {
//   super(props);
//   this.state = {
//     price1:props.price,
//     qty:props.qty,
//     tp:props.price
//   };
// }
// componentDidMount(){
//   console.log('hello guys')
//   this.setState({
//     price1:this.props.price,
//     qty:this.props.qty,
//     tp:this.props.price
//   })
// }

// componentDidUpdate(prevState){
//   // console.log(prevState,'in testing hhhhhhhhh')

//   if (this.state.qty != prevState.qty){

//   }

// }
// handleChange = (e) => {
//   // console.log(typeof(e.target.value))
//   // this.setState({
//   //   qty: parseInt(e.target.value),
//   //   tp:parseInt(e.target.value)*this.state.price1
//   // });
// };

// render() {
// console.log(this.state.price1,'in card -------------->')

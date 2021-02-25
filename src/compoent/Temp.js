import React, { Component } from "react";
import Modal from "react-modal";
import Footer from "./footer";
import Nav from "./Nav";
import Header from "./Header";
import Card from "./Card";
import HomeS from "./HomeScreen";
import Wishlist from "./WishList";
import notes from "../notes";
import "./Style.css";
import "./Modal.css";
Modal.setAppElement("#root");
export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedItem: "",
      tp: 0,
      feature: [],
      wishlist: [],
      wishlistClick: false,
      addProductBtn: false,
    };
  }
  componentDidMount() {
    this.setState({ tp: 0 });
  }
  componentDidUpdate(prevState) {
    let newPrice = 0;

    for (let i = 0; i < this.state.feature.length; i++) {
      newPrice += this.state.feature[i].price * this.state.feature[i].qty;
      // console.log(this.state.feature[i],'inloop')
    }
    // if (prevState.tp != newPrice){
    //   this.setState({
    //     tp:newPrice
    //   })
    // }
    // console.log(newPrice,'price')
    if (this.state.tp != newPrice) {
      // if (this.state.qty > 5) {
      //   newPrice = Math.round((newPrice / 100).toFixed(2) * 30);
      // }
      this.setState({ tp: newPrice });
    }
  }
  searchMovie = (e) => {
    this.setState({
      searchedItem: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  toggleWishList = () => {
    let wis = this.state.wishlistClick;
    this.setState({
      wishlistClick: !wis,
    });
  };
  toggle = () => {
    let prev = this.state.addProductBtn;
    this.setState({
      addProductBtn: !prev,
    });
  };
  getItem = () => {
    // console.log("Item", this.state.searchedItem);
    if (this.state.searchedItem) {
      // console.log(notes[0].article);
      // notes.map((arti, index) => {
      //   if (this.state.searchedItem === arti.article) {
      //     // console.log("Numers", arti.article);
      //     let newProduct = {
      //       src: arti.src,
      //       title: arti.title,
      //       content: arti.content,
      //       article: arti.article,
      //       Price: arti.Price,
      //       price: arti.price,
      //     };
      //     // console.log(newProduct);
      //     const CurrItem = [...this.state.feature];
      //     CurrItem.push(newProduct);
      //     // console.log(CurrItem);
      //     this.setState({
      //       feature: CurrItem,
      //     });
      //   }
      // });
      let found = this.state.feature.find((item) => {
        return item.article == this.state.searchedItem;
      });
      if (!found) {
        let prod = notes.find((item) => {
          return item.article == this.state.searchedItem;
        });
        let newArr = [...this.state.feature];
        newArr.push(prod);
        this.setState({
          feature: newArr,
        });
      } else {
        alert("Already in cart");
      }
    }
  };

  HandleWish = (idx, article) => {
    const ty = this.state.wishlist.find((it) => {
      return it.article == article;
    });
    if (!ty) {
      let prev = [...this.state.feature];
      const item = prev.slice(idx, idx + 1)[0];
      prev = prev.slice(0, idx).concat(prev.slice(idx + 1));
      let wish = [...this.state.wishlist];
      wish.push(item);
      this.setState({
        feature: prev,
        wishlist: wish,
      });
    } else {
      alert("Already in WishList");
    }
    // console.log("feature phele", prev);
    //   const getItem = prev.splice(idx, idx + 1).concat(prev.slice(idx + 1, idx));

    //   const next = [...this.state.wishlist];
    //   // console.log("next wishlist ke badd", next);
    //   next.push(...getItem);
    //   // console.log("next push ke ", next);
    //   // console.log("feature push ke ", prev);
    //   this.setState({
    //     feature: prev,
    //     wishlist: next,
    //   });
    // };
  };

  HandleAddToBag = (idx, article) => {
    console.log(article);
    const foo = this.state.feature.find((it) => {
      return it.article == article;
    });
    if (!foo) {
      let item = this.state.wishlist.slice(idx, idx + 1)[0];
      let feat = [...this.state.feature];
      let wishlist = this.state.wishlist
        .slice(0, idx)
        .concat(this.state.wishlist.slice(idx + 1));
      feat.push(item);
      this.setState({
        feature: feat,
        wishlist: wishlist,
      });
    } else {
      alert("Already In Bag ");
    }
  };

  handleremove = (idx) => {
    let old = [...this.state.feature];
    old = old.slice(0, idx).concat(old.slice(idx + 1));
    this.setState({ feature: old });

    // this.setState((state) => ({
    //   feature: state.feature.filter((data) => data.article !== article),
    // }));
  };

  handleremoveWish = (idx) => {
    let item = [...this.state.wishlist];
    item = item.slice(0, idx).concat(item.slice(idx + 1));
    this.setState({
      wishlist: item,
    });
  };

  increseQty = (idx, qt) => {
    // tP += this.state.feature
    let curr = [...this.state.feature];
    if (qt < 5) {
      alert("Add More than 5 To get 30% Discount");
    } else if (qt > 50) {
      alert("Product Limit Exceed");
    }
    curr[idx].qty = qt;

    this.setState({
      feature: curr,
    });
    // for(let i = 0; i< this.state.feature.length ; i++){
    //   tp += this.state.feature[i].price*this.state.feature[i].qty
    // }
    // this.setState({
    //   tp:tp
    // })
  };

  render() {
    let Items = null;
    Items = this.state.feature.map((product, index) => {
      return (
        <Card
          key={index.toString()}
          index={index}
          src={product.src}
          title={product.title}
          content={product.content}
          article={product.article}
          Price={product.Price}
          price={product.price}
          qty={product.qty}
          onDelete={this.handleremove}
          increseQty={this.increseQty}
          wishlist={this.HandleWish}
        />
      );
    });
    let wList = null;
    wList = this.state.wishlist.map((item, idx) => {
      return (
        <Wishlist
          key={idx.toString()}
          index={idx}
          src={item.src}
          title={item.title}
          content={item.content}
          article={item.article}
          Price={item.Price}
          price={item.price}
          qty={item.qty}
          onDele={this.handleremoveWish}
          MoveToBag={this.HandleAddToBag}
        />
      );
    });

    return (
      <div className="whole-wrapper">
        <Nav show={this.toggleWishList} />
        {this.state.wishlistClick && this.state.wishlist.length > 0 ? (
          <div className="wishList-cona con">{wList}</div>
        ) : null}

        {this.state.feature.length > 0 ? (
          <div>
            <Header />
            {Items}
          </div>
        ) : (
          <div>
            <HomeS />
          </div>
        )}
        {this.state.addProductBtn ? (
          <div
            className="article after"
            style={{
              borderBottom:
                this.state.feature.length > 0 ? "2px solid black" : " ",
            }}
          >
            <p onClick={this.toggle}>+ Add a product by article number</p>
          </div>
        ) : (
          <div>
            <div className="article article-content">
              <p onClick={this.toggle}>- Add a product by article number</p>
            </div>
            <form onSubmit={this.handleSubmit} className="atricle-form">
              <div
                className="article-content   after"
                style={{
                  borderBottom:
                    this.state.feature.length > 0 ? "2px solid black" : " ",
                }}
              >
                <input
                  type="text"
                  value={this.state.searchedItem}
                  onChange={this.searchMovie}
                  placeholder="e.g 901.165.53"
                  required
                />
                <div className="article-btn ">
                  <button type="Submit" onClick={this.getItem}>
                    Add article
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        {this.state.tp > 0 ? (
          <div className="check-Out">
            <div className="total-price">
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                <strong id="str">Subtotal </strong>VAT Included
              </p>
              <p>
                SR &nbsp;
                {this.state.tp}
              </p>
            </div>
            <div className="check-Out btn">
              <button className="btn">Check Out</button>
            </div>
          </div>
        ) : (
          ""
        )}
        <Footer />
      </div>
    );
  }
}

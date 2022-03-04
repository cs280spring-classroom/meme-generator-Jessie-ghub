import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Meme from "./components/Meme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upper : "",
      lower : "",
      picURL: "",
    };
  }

  updateMeme = (upper, lower, url) => {
    this.setState({ upper: upper, lower: lower, picURL: url,  });
    console.log(this.state.upper, this.state.lower,this.state.picURL,);
  };

  render() {
    return (
      <>
        <Header />
        <Search updateUI={this.updateMeme} />
        <Meme upper={this.state.upper} lower={this.state.lower} picURL={this.state.picURL} />
        <Footer />
      </>
    );
  }
}

export default App;


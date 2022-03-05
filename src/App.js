import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Meme from "./components/Meme";

class App extends Component {
  // display empty when first loaded
  constructor(props) {
    super(props);
    this.state = {
      upper : "",
      lower : "",
      picURL: "",
    };
  }

  // update fetched value
  updateMeme = (upper, lower, url) => {
    this.setState({ upper: upper, lower: lower, picURL: url,  });
  };

  render() {
    return (
      <>
        <Header />
        <Search updateMeme={this.updateMeme} />
        <Meme upper={this.state.upper} lower={this.state.lower} picURL={this.state.picURL} />
        <Footer />
      </>
    );
  }
}

export default App;


import React, { Component } from "react";
import Axios from "axios";
import Element from "../element";
import { StyledTable } from "../styled-components/layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [],
      active: ""
    };
  }

  componentDidMount() {
    Axios.get(
      "https://raw.githubusercontent.com/betaoab/front-end-interview/master/periodic-table-data.json"
    )
      .then((data) => this.setState({ elements: data.data }))
      .catch((err) => console.log(err));
  }

  setActive = (block) => {
    block = this.state.active === block ? "" : block;

    this.setState({
      active: block
    });
  };

  render() {
    const drawTable = this.state.elements.map((element) => {
      return (
        <Element
          key={element.atomicNumber}
          element={element}
          active={this.state.active}
          setActive={this.setActive}
        />
      );
    });

    return <StyledTable>{drawTable}</StyledTable>;
  }
}

export default App;

import React, { Component } from "react";
import PropTypes from "prop-types";
// const yee = [
//   { id: 1, name: "yee1" },
//   { id: 2, name: "yee2" },
//   { id: 3, name: "yee3" },
//   { id: 4, name: "yee4" },
// ];
function Yeet({ name }) {
  return <h1>{name}</h1>;
}
Yeet.propTypes = {
  name: PropTypes.string.isRequired,
};
class App extends Component {
  state = {
    cnt: 0,
  };
  add = () => {
    this.setState((current) => ({ cnt: current + 1 }));
  };
  sub = () => {
    this.setState((current) => ({ cnt: current - 1 }));
  };
  render() {
    return (
      <>
        <h3>
          {/* {yee.map((y) => (
          <Yeet key={y.id} name={y.name} />
        ))} */}
          [yee]x{this.state.cnt}
        </h3>

        <button
          onClick={() => {
            this.add();
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.sub();
          }}
        >
          Sub
        </button>
      </>
    );
  }
}

export default App;

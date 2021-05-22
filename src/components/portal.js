import React from "react";
import ReactDOM from "react-dom";

const root =
  typeof document !== `undefined` ? document.getElementById("menu") : null;

class Portal extends React.Component {
  constructor() {
    super();
    // Use a ternary operator to make sure that the document object is defined
    this.el =
      typeof document !== `undefined` ? document.createElement("div") : null;
  }

  componentDidMount = () => {
    root.appendChild(this.el);
  };

  componentWillUnmount = () => {
    root.removeChild(this.el);
  };

  render() {
    const { children } = this.props;

    if (this.el) {
      return ReactDOM.createPortal(children, this.el);
    } else {
      return null;
    }
  }
}

export default Portal;

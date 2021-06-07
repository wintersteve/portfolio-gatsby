import React from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
  constructor(props) {
    super();
    // Use a ternary operator to make sure that the document object is defined
    this.el =
      typeof document !== `undefined` ? document.createElement("div") : null;

    this.root =
      typeof document !== `undefined`
        ? document.getElementById(props.root)
        : null;
  }

  componentDidMount = () => {
    this.root.appendChild(this.el);
  };

  componentWillUnmount = () => {
    this.root.removeChild(this.el);
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

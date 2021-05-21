import React from "react";

function Hoc(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent count="hoc added prop" {...this.props} />;
    }
  };
}

export default Hoc;

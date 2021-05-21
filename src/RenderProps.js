import React from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";

class MouseTracker extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid red", width: "99%" }}>
        <h1>Move the mouse around (Render Prop)!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;

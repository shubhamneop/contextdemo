import React from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="..."
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          height: "100px",
        }}
      />
    );
  }
}

export default Cat;

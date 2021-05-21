import React from "react";
import Hoc from "./Hoc";

function DemoHoc(props) {
  console.log("ths", props);
  return (
    <div>
      <h1>
        {props.count}, {props.text}
      </h1>
    </div>
  );
}

export default Hoc(DemoHoc);

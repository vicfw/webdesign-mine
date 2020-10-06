import React from "react";

function LayOut(props) {
  return (
    <div
      style={{
        background: props.background,
        width: "100%",
        backgroundSize: props.bgsize,
      }}
    >
      {props.children}
    </div>
  );
}

export default LayOut;

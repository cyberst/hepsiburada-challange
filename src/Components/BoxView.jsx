import React from "react";
import "./BoxView.css";

function BoxView(props) {
  return (
    <div className="BoxView">
      <div
        className="BoxView_text"
        style={props.subText === undefined ? { fontSize: "45px" } : {}}
      >
        {props.text}
      </div>
      <div>{props.subText}</div>
    </div>
  );
}

export default React.memo(BoxView);

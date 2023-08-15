import React from "react";
import withDimensions from "./WithDimensions";

const Comp1 = (props, forwardedRefFromParent) => {
  return (
    <div ref={forwardedRefFromParent} className="comp1">
      {" "}
      I am comp 1 and my width is {props.width}{" "}
    </div>
  );
};

export default withDimensions(React.forwardRef(Comp1));

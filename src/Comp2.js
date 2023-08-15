import React from "react";
import withDimensions from "./WithDimensions";

const Comp2 = (props, forwardedRefFromParent) => {
  return (
    <div ref={forwardedRefFromParent} className="comp2">
      I am comp 2 and my width is {props.width}and the random number is
      {props.randomNumber}
    </div>
  );
};

export default withDimensions(React.forwardRef(Comp2));

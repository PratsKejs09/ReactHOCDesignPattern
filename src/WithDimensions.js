import { useRef, useState, useEffect } from "react";

const withDimensions = (Component) => {
  function WithDimensions(props) {
    const compRef = useRef();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (compRef.current) {
        // if the ref is present
        setWidth(compRef.current.offsetWidth);
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);

    return <Component ref={compRef} width={width} height={height} {...props} />;
  }
  return WithDimensions;
};

export default withDimensions;

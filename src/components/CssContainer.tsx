import React from "react";
type cssContainerProps = {
  styles: React.CSSProperties;
};
const CssContainer = (props: cssContainerProps) => {
  return (
    <>
      <div style={props.styles}>This is a text</div>
    </>
  );
};

export default CssContainer;

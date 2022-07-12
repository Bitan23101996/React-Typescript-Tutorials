import React from "react";
type LevelTwoProps = {
    children: React.ReactNode;
  };
const LevelOne = (props:LevelTwoProps ) => {
  return <div>{props.children}</div>;
};

export default LevelOne;

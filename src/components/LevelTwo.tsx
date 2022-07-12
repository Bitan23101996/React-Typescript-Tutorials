import React from "react";
type LevelTwoProps = {
  children: string;
};
const LevelTwo = (props: LevelTwoProps) => {
  return <div>{props.children}</div>;
};

export default LevelTwo;

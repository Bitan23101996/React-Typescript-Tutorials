import React from "react";

type GreetsProps = {
  username: string;
  msgCount?: number;
  isLoggedIn: boolean;
};

const Greets = (props: GreetsProps) => {
  const {msgCount = 0} = props
  return (
    <>
      {props.isLoggedIn
        ? `Welcome, ${props.username} ! You have ${msgCount} messages`
        : "Welcome Guest"}
    </>
  );
};

export default Greets;

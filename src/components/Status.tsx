import React from "react";
type StatusProps = {
  status: "LOADING" | "SUCCESS" | "ERROR";
};
const Status = (props: StatusProps) => {
  let message = "";
  if (props.status === "LOADING") {
    message = "Loading....";
  } else if (props.status === "SUCCESS") {
    message = "Data fetched successfully";
  } else if (props.status === "ERROR") {
    message = "Some Error occured";
  }

  return (
    <>
      <h3>{message}</h3>
    </>
  );
};

export default Status;

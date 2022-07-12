import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  };

  const handleLoggedOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button type="button" onClick={handleLoggedIn}>
        Login
      </button>
      <button type="button" onClick={handleLoggedOut}>
        Log Out
      </button>
      <label>User is {isLoggedIn ? "Logged in" : "Logged out"} </label>
    </div>
  );
};

export default LoggedIn;

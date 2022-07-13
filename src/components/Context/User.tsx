import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogIn = () => {
    if (userContext) {
      userContext.setUser({
        email: "bitan@gmail.com",
        name: "Bitan Das",
      });
    }
  };
  const handleLogOut = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button type="button" onClick={handleLogIn}>
        Login
      </button>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
      <div>
        <p>Loggedin User name:{userContext?.user?.name}</p>
        <p>Loggedin User email:{userContext?.user?.email}</p>
      </div>
    </div>
  );
};

export default User;

import React, { useState } from "react";

type UserInfoProps = {
  name: string;
  email: string;
};
const User = () => {
  //   const [userInfo, setUserInfo] = useState<UserInfoProps | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps); //Type assertion

  const handleLoggedIn = () => {
    setUserInfo({
      name: "Bitan",
      email: "bitan@gmail.com",
    });
  };

  const handleLoggedOut = () => {
    // setUserInfo(null);
  };
  return (
    <>
      <button type="button" onClick={handleLoggedIn}>
        Logged In
      </button>
      <button type="button" onClick={handleLoggedOut}>
        Logged Out
      </button>

      <fieldset>
        {userInfo == null ? (
          ""
        ) : (
          <>
            {/*          <label>Logged in Username: {userInfo?.name}</label>
            <p>Logged in email: {userInfo?.email}</p> */}

            <label>Logged in Username: {userInfo.name}</label>
            <p>Logged in email: {userInfo.email}</p>
          </>
        )}
      </fieldset>
    </>
  );
};

export default User;

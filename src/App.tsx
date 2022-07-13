import React from "react";
import "./App.css";
import Private from "./components/Auth/Private";
import Profile from "./components/Auth/Profile";
import Button from "./components/Button";
import Counter from "./components/Class/Counter";
import Box from "./components/Context/Box";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import User from "./components/Context/User";
import { UserContextProvider } from "./components/Context/UserContext";
import CssContainer from "./components/CssContainer";
import Greets from "./components/Greets";
import Input from "./components/Input";
import LanguageList from "./components/LanguageList";
import LevelOne from "./components/LevelOne";
import LevelTwo from "./components/LevelTwo";
import Persons from "./components/Persons";
import MuttableRef from "./components/Ref/MuttableRef";
// import Counter from "./components/State/Counter";
import LoggedIn from "./components/State/LoggedIn";

import Status from "./components/Status";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Lauren",
  };

  const languageList = [
    {
      id: 1,
      title: "Angular",
      stack: "MEAN",
    },
    {
      id: 2,
      title: "React",
      stack: "MERN",
    },
    {
      id: 3,
      title: "Node",
      stack: "MERN",
    },
  ];
  return (
    <div className="App">
      {/* <Greets username="Lorem" isLoggedIn={false} /> */}
      {/* <Persons name={personName} /> */}
      {/* <LanguageList languages={languageList} /> */}
      {/* <Status status="LOADING" /> */}
      {/* <LevelOne>
        <LevelTwo>Message fromLevel Two</LevelTwo>
      </LevelOne> */}

      {/*  <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />
      <Input value="" handleChange={(event) => console.log("Event:", event)} />

      <CssContainer styles={{ border: "2px dotted grey", padding: "1rem" }} /> */}

      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter/> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/*  <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <MuttableRef/> */}
      {/* <Counter message="Hello"/> */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;

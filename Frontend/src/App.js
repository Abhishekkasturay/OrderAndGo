import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import UserContext from "./utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState("");


  useEffect(() => {
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setLoggedInUser: setUserName }}
    >
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default App;

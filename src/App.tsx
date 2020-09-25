import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState("defunkt");
  const [searchType, setSearchType] = useState("user");
  const sendRequest = function () {
    axios
      .get(`https://api.github.com/${searchType}/${user}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <input placeholder="Start typing to search ..."></input>
    </div>
  );
}

export default App;

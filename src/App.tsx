import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  axios
    .get("https://api.github.com/users/defunkt")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div>React App</div>;
}

export default App;

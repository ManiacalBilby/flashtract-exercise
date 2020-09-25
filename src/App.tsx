import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchType, setSearchType] = useState("users");
  const [searchText, setSearchText] = useState();

  console.log("searchType", searchType);
  console.log("searchText", searchText);
  //@ts-ignore
  function handleSearchTypeChange(e) {
    setSearchType(e.target.value);

    sendRequest();
  }
  //@ts-ignore
  function handleSearchTextChange(e) {
    //@ts-ignore
    setSearchText(`?q=${e.target.value}`);
  }

  const sendRequest = function () {
    console.log("searchType in sendRequest", searchType);
    //   axios
    //     .get(`https://api.github.com/search/${searchType}${searchText}`)
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  };
  return (
    <div>
      <input
        onChange={handleSearchTextChange}
        placeholder="Start typing to search ..."
      ></input>
      <select
        value={searchType}
        //@ts-ignore
        onChange={handleSearchTypeChange}
        name="search-select"
        id="search-select"
      >
        <option value="users">Users</option>
        <option value="repositories">Repos</option>
      </select>
    </div>
  );
}

export default App;

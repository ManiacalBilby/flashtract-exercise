import React, { useState, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchType, setSearchType] = useState("users");
  const [searchText, setSearchText] = useState();
  const [dataResults, setDataResults] = useState();
  const searchTypeRef = useRef();
  const searchTextRef = useRef();
  //@ts-ignore
  searchTypeRef.current = searchType;
  searchTextRef.current = searchText;

  //@ts-ignore
  const dataItems = dataResults && dataResults.data.items;

  console.log("searchType", searchType);
  console.log("searchText", searchText);
  //@ts-ignore
  async function handleSearchTypeChange(e) {
    await setSearchType(e.target.value);
    if (searchText) {
      sendRequest();
    }
  }
  //@ts-ignore
  async function handleSearchTextChange(e) {
    //@ts-ignore
    await setSearchText(`?q=${e.target.value}`);
    sendRequest();
  }
  //@ts-ignore
  function sendRequest() {
    console.log("searchType in sendRequest", searchTypeRef.current);
    console.log("searchText in sendRequest", searchTextRef.current);
    axios
      .get(
        `https://api.github.com/search/${searchTypeRef.current}${searchTextRef.current}`
      )
      .then(function (response) {
        console.log(response);
        //@ts-ignore
        setDataResults(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="wrapper">
      <div>
        <div>
          <label>
            <b>GitHub Searcher</b>
          </label>
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
        <div className="card-container">
          {dataItems &&
            //@ts-ignore
            dataItems.map((element) => {
              if (element.avatar_url) {
                return (
                  <div className="card" key={element.id}>
                    <img src={element.avatar_url} className="profile" alt="" />
                    <span>{element.login}</span>
                  </div>
                );
              } else
                return (
                  <div className="card" key={element.id}>
                    <span>{element.name}</span>
                    <p>{element.description}</p>
                  </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;

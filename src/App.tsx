import React, { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./spinner_transparent.gif";
import RepoCard from "./RepoCard";
import UserCard from "./UserCard";

function App() {
  const [searchType, setSearchType] = useState("users");
  const [searchText, setSearchText] = useState();
  const [dataResults, setDataResults] = useState();
  const [loading, setLoading] = useState(false);
  const searchTypeRef = useRef();
  const searchTextRef = useRef();
  //@ts-ignore
  searchTypeRef.current = searchType;
  searchTextRef.current = searchText;

  //@ts-ignore
  const dataItems = dataResults && dataResults.data.items;
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
    await setSearchText(e.target.value);
    if (searchTextRef.current) {
      sendRequest();
    }
  }
  //@ts-ignore
  function sendRequest() {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/${searchTypeRef.current}?q=${searchTextRef.current}`
      )
      .then(function (response) {
        setLoading(false);
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
        <div className="search-container">
          <div>
            <label>
              <b>GitHub Searcher</b>
            </label>
          </div>
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
        {loading ? (
          <div className="loader">
            <img src={Spinner} alt="" />
          </div>
        ) : (
          <div className="card-container">
            {dataItems &&
              //@ts-ignore
              dataItems.map((result) => {
                if (result.avatar_url) {
                  return <UserCard result={result} />;
                } else return <RepoCard result={result} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./spinner_transparent.gif";

function App() {
  const [searchType, setSearchType] = useState("users");
  const [searchText, setSearchText] = useState();
  const [dataResults, setDataResults] = useState();
  const [loading, setLoading] = useState(false);
  const searchTypeRef = useRef();
  const searchTextRef = useRef();

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
    console.log(
      "search text ref in handleSearchTextChange",
      searchTextRef.current
    );
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
                  return (
                    <div className="user-card" key={result.id}>
                      <div className="profile-info">
                        <img
                          src={result.avatar_url}
                          className="profile-pic"
                          alt=""
                        />
                        <span>{result.login}</span>
                      </div>
                      <div>
                        <a href={result.url}>View Profile</a>
                      </div>
                    </div>
                  );
                } else
                  return (
                    <div className="repo-card" key={result.id}>
                      <span>{result.name}</span>
                      <div className="profile-info">
                        <img
                          src={result.owner.avatar_url}
                          className="profile-pic"
                          alt=""
                        />
                        <span>{result.owner.login}</span>
                      </div>
                      <div className="repo-stats">
                        <span className="stat">
                          Stars: {result.stargazers_count}
                        </span>
                        <span className="stat">
                          Forks: {result.forks_count}
                        </span>
                        <span>Watchers: {result.watchers_count}</span>
                      </div>
                      <p>{result.description}</p>
                    </div>
                  );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

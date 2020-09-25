import React from "react";

function RepoCard(result) {
  const {
    id,
    name,
    owner,
    stargazers_count,
    forks_count,
    watchers_count,
    description,
  } = result.result;
  return (
    <div className="repo-card" key={id}>
      <span>{name}</span>
      <div className="profile-info">
        <img src={owner.avatar_url} className="profile-pic" alt="" />
        <span>{owner.login}</span>
      </div>
      <div className="repo-stats">
        <span className="stat">Stars: {stargazers_count}</span>
        <span className="stat">Forks: {forks_count}</span>
        <span>Watchers: {watchers_count}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default RepoCard;

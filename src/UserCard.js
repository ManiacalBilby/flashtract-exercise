import React from "react";

function RepoCard(result) {
  const { id, avatar_url, login, url } = result.result;
  return (
    <div className="user-card" key={id}>
      <div className="profile-info">
        <img src={avatar_url} className="profile-pic" alt="" />
        <span>{login}</span>
      </div>
      <div>
        <a href={url}>View Profile</a>
      </div>
    </div>
  );
}

export default RepoCard;

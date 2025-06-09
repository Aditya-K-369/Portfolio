import React from 'react';


function CodingProfile() {
  return (
    <section className="coding-profile" id ="coding">
      <h2 className="coding-title">Coding Profiles</h2>

      <p className="coding-desc">
        Welcome to my coding profile! Throughout my coding journey, I have successfully tackled complex challenges,
        finding innovative solutions to enhance user experiences and meet project objectives.
      </p>

      <div className="profile-icons">
        <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
          />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
          />
        </a>
      </div>
    </section>
  );
}

export default CodingProfile;

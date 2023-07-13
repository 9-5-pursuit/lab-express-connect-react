import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>✨ Welcome, Captains ✨</h1>
      <img
        src="https://cf.geekdo-images.com/fNcGzULPA1FAFx-6FTpQFg__opengraph/img/WeettW4fMKh47C5ongYHf4WNFxU=/0x0:3505x1840/fit-in/1200x630/filters:strip_icc()/pic6415757.jpg"
        alt="Captain's Log Homepage"
        height="240px"
      />
      <h2>
        <span>
          <a href="/logs">[ View Logs Here ]</a>
        </span>{" "}
        🧭{" "}
        <span>
          <a href="/logs/new">[ Create a New Log Here ]</a>
        </span>
      </h2>
    </div>
  );
}

export default Home;

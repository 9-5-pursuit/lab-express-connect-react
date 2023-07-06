import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://cf.geekdo-images.com/fNcGzULPA1FAFx-6FTpQFg__opengraph/img/WeettW4fMKh47C5ongYHf4WNFxU=/0x0:3505x1840/fit-in/1200x630/filters:strip_icc()/pic6415757.jpg"
          alt="Captain's Log Homepage"
          height="50px"
          width="100px"
        />
      </Link>
      <Link to="/logs">Captain's Log</Link>
      <Link to="/logs/new">New Log</Link>
    </nav>
  );
}

export default NavBar;

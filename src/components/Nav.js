import React from "react";

function Nav() {
    return (
        <header>
            <h1>Captain's Log</h1>
            <ul>
                <li>
                    <a href="/logs">Home</a>
                </li>
                <li>
                    <a href="/logs/new">New Log</a>
                </li>
            </ul>
        </header>
    );
}

export default Nav;

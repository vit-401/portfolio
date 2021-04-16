import React from 'react'

import { Link } from "react-scroll";

export default function App2() {
    return (
        <div className="App">
            <Link to="main">Main</Link>
            <h1>Hello CodeSandbox</h1>
            <h2 style={{ height: "200vh" }}>
                Start editing to see some magic happen!
            </h2>
            <div id="main">Main</div>
        </div>
    );
}

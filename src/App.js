import React from "react";
import logo from "./logo.svg";
import "./App.css";
/* eslint-disable import/no-webpack-loader-syntax */
import Document, {
  frontMatter,
  tableOfContents
} from "!babel-loader!mdx-loader!./document.mdx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/kentcdodds/babel-plugin-macros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Babel Plugin Macros
        </a>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Document />
        </React.Suspense>{" "}
        <p>{`And so is this: {ms("1.5 days")}ms (that's 1.5 days)`}</p>
      </header>
    </div>
  );
}

export default App;

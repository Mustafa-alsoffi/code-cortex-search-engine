import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import SearchBar from "../src/SearchBar";
const Search = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Code Cortex Search Engine⚡</h1>
      <div style={{ maxWidth: "400px", maxHeight: "50px" }}>
        <p>
          <ReactTyped
            alignItems="start"
            strings={[
              "Our search engine can help you identify potential scamemrs/scams report them\n and help others to stay safe!",
            ]}
            typeSpeed={50}
            backSpeed={30}
          />
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Search;

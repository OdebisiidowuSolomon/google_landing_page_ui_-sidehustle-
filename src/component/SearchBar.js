import { Mic, Search } from "@material-ui/icons";
import React from "react";

export default function SearchBar({ onHandleChange }) {
  return (
    <div className="searchBar">
      <Search />
      <input
        type="text"
        placeholder="Search Sidehustle or type a URL"
        onChange={onHandleChange}
      />
      <Mic />
    </div>
  );
}

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import logo from "../assets/logo-dark.64d45129.png";
import SearchBar from "./SearchBar";

export default function Content() {
  const [name, setName] = useState("");

  const colorArr = [
    "yellow",
    "blue",
    "green",
    "red",
    "purple",
    "cyan",
    "magenta",
  ];
  const handleChange = (e) => setName(e.target.value);

  return (
    <div className="content">
      <div className="content__logo">
        {name.length > 0 ? (
          <div className="content__text">
            {name.split("").map((c, i) => (
              <span
                key={c + i}
                style={{
                  color: colorArr[Math.ceil(Math.random() * colorArr.length)],
                }}
              >
                {c}
              </span>
            ))}
          </div>
        ) : (
          <img src={logo} alt="logo" />
        )}
      </div>
      <div className="content__searchBar">
        <SearchBar onHandleChange={handleChange} />
      </div>
      <div className="content__buttons">
        <Button>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
      <div className="content__offering">
        <span>Google Offered In:</span>
        <div className="content__language">
          <span>Hausa</span>
          <span>Igbo</span>
          <span>Ede Yoruba</span>
          <span>Nigerian Pidgin</span>
        </div>
      </div>
    </div>
  );
}

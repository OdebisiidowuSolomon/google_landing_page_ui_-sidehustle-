import React from "react";

export default function Option({ name, active }) {
  return (
    <span className={`option__name hover ${active ? active : ""}`}>{name}</span>
  );
}

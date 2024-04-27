import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function Checklist() {
  const checkboxesList = [
    "Laura Tindley",
    "Lucy Scaramanga",
    "Sarah Parry-Jones",
    "Katie Worthington",
    "Sam Dickinson",
    "Steve Long",
  ];

  return (
    <div>
      <ul>
        {checkboxesList.map(function (name, index) {
          return (
            <li key={index}>
              <input type="checkbox"></input>
              <label className="m-1"> {name}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

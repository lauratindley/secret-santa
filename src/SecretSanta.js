import React from "react";
import "./SecretSanta.css";

export default function SecretSanta() {
  return (
    <div className="nameList">
      <h1>Secret Santa 🎅</h1>
      <p>Who wants to join the Secret Santa this year?</p>
      <form>
        <ul className="names">
          <li>
            <input type="checkbox" id="lauraTindley" className="name"></input>
            <label className="name">Laura Tindley</label>
          </li>
          <li>
            <input type="checkbox" id="lucyScaramanga" className="name"></input>
            <label className="name">Lucy Scaramanga</label>
          </li>
        </ul>
      </form>
    </div>
  );
}

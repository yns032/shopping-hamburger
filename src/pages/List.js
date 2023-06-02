import React from "react";
import { Link } from "react-router-dom";

function List() {
  return (
    <nav className="liste">
      <a className="list_head" href="/">
        Feame
      </a>
      <ul className="menü">
        <li className="item">
          <a href="/">Home</a>
        </li>
        <li className="item">
          <a href="/menu">Menu</a>
        </li>
        <li className="item">
          <a href="/about">About</a>
        </li>
        <li className="item">
          <a href="/booktable">Book Table</a>
        </li>
      </ul>
    </nav>
  );
}

export default List;

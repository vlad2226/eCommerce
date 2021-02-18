import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, image, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">subtitle</span>
    </div>
  </div>
);

export default MenuItem;

import React from "react";

import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);

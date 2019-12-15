import React from "react";

export default () => {
  return (
    <div className="footer">
      <div id="ad-container">
        <div className="greenbelt-logo" />
        <a
          href="https://www.davidrjameson.com/greenbelt-patch/purchase-greenbelt-patch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Shop locally designed Greenbelt Goods!</p>
        </a>
      </div>
      <div className="button-container">
        <a
          href="mailto:snguyenatx@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-envelope" />
        </a>
        <a
          href="https://www.instagram.com/serenanguyen_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/serenanguyenatx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

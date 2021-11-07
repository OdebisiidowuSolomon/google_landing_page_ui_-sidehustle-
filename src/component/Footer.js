import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__country hover">Nigeria</div>
      <hr />
      <div className="footer__options">
        <div className="footer__option">
          <span className="hoverBtn">Settings</span>
          <span className="hoverBtn">Privacy</span>
          <span className="hoverBtn">Terms</span>
        </div>
        <div className="footer__option">
          <span className="hoverBtn">Advertising</span>
          <span className="hoverBtn">Business</span>
          <span className="hoverBtn">About</span>
        </div>
      </div>
    </div>
  );
}

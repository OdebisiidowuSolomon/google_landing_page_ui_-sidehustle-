import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__country">Nigeria</div>
      <hr />
      <div className="footer__options">
        <div className="footer__option">
          <span>Settings</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <div className="footer__option">
          <span>Advertising</span>
          <span>Business</span>
          <span>About</span>
        </div>
      </div>
    </div>
  );
}

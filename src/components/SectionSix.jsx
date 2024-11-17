import React from "react";
import "../assets/styles.css";

const TrustedBy = () => {
  return (
    <div className="container">
      <div className="trusted-container">
        <h2>Trusted by over 100,000 customers world-wide</h2>
        <div className="logos">
          <div className="logo">
            <img
              src="./images/logos/Square Logo.svg"
              alt="Square"
            />
          </div>
          <div className="logo">
            <img
              src="./images/logos/ebay logo.svg"
              alt="eBay"
            />
          </div>
          <div className="logo">
            <img
              src="./images/logos/Spotify logo.svg"
              alt="Spotify"
            />
          </div>
          <div className="logo">
            <img
              src="./images/logos/Cisco Logo.svg"
              alt="Cisco"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

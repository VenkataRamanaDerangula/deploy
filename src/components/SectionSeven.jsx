import React from "react";
import "../assets/styles.css";

const PricingSection = () => {
  return (
    <div className="container">
      <div className="container-2">
        <div className="left-section">
          <img
            className="main-img"
            src="https://www.ultimate.ai/hs-fs/hubfs/Blog_Thumbnail_Will%20AI%20Replace%20Humans%20in%20Customer%20Service__1200x628px_2x-1.jpg?width=1800&height=942&name=Blog_Thumbnail_Will%20AI%20Replace%20Humans%20in%20Customer%20Service__1200x628px_2x-1.jpg"
            alt="Main"
          />
          <div className="price-tag individual">
            <p>Individual Pricing $14/month</p>
          </div>
          <div className="price-tag asana">
            <p>3 free projects, forever</p>
          </div>
          <div className="price-tag standalone">
            <p>7-day free-trial</p>
          </div>
          <div className="price-tag team">
            <p>Team pricing $30/month</p>
          </div>
        </div>
        <div className="right-section">
          <h1>Choose the plan that suits you best</h1>
          <p>
            We offer monthly and yearly subscriptions. Sign up for free, no
            credit card required.
          </p>
          <button>See pricing</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

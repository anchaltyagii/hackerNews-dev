import React from "react";
import "./Tabs.scss";

const Tabs = (props) => {
  const { title, onClick, icon, className, active } = props;
  return (
    <button
      onClick={onClick}
      className={
        !active
          ? `tabs-wrapper ${className}`
          : `tabs-wrapper active ${className}`
      }
    >
      {/* <img src={icon} className="tab-icon" /> */}
      {title}
    </button>
  );
};

export default Tabs;

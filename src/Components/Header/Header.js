import React, { useState } from "react";
import "./Header.scss";
import { AccountCircleOutlined } from "@mui/icons-material";
import Tabs from "../Tabs/Tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { icon } from "../../Assets/index";

const Header = () => {
  const [newsTabs, setNewsTabs] = useState(true);
  const [newestTabs, setNewestTabs] = useState(false);
  const [bestTabs, setBestTabs] = useState(false);

  const { hacker_news_icon } = icon;

  const navigate = useNavigate();
  const location = useLocation();

  const handleNews = () => {
    setNewsTabs(true);
    setNewestTabs(false);
    setBestTabs(false);
    navigate("/");
  };

  const handleNew = () => {
    setNewsTabs(false);
    setNewestTabs(true);
    setBestTabs(false);
    navigate("/newest");
  };

  const handleBest = () => {
    setNewsTabs(false);
    setNewestTabs(false);
    setBestTabs(true);
    navigate("/best");
  };

  return (
    <div className="header-container">
      <div className="hacker-news-icon-wrapper">
        <div className="hacker-news-icon">
          <img src={hacker_news_icon} height="100%" width="100%" />
        </div>
        <h5>Hacker News</h5>
      </div>
      <div className="header-tabs-wrapper">
        <Tabs
          title="Top"
          active={location.pathname === "/" && true}
          onClick={handleNews}
        />
        <Tabs
          title="New"
          active={location.pathname === "/newest" && true}
          onClick={handleNew}
        />
        <Tabs
          title="Best"
          active={location.pathname === "/best" && true}
          onClick={handleBest}
        />
        {/* <Tabs title="Ask" active={} />
        <Tabs title="Jobs" active={} />
        <Tabs title="Submit" active={} /> */}
      </div>
      <div>
        <AccountCircleOutlined />
      </div>
    </div>
  );
};

export default Header;

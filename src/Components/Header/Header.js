import React, { useState } from "react";
import "./Header.scss";
import { AccountCircleOutlined } from "@mui/icons-material";
import Tabs from "../Tabs/Tabs";
import { icon } from "../../Assets/index";

const Header = () => {
  const [newsTabs, setNewsTabs] = useState(true);
  const [threadsTabs, setThreadsTabs] = useState(false);

  const { hacker_news_icon } = icon;

  const handleNews = () => {
    setNewsTabs(true);
    setThreadsTabs(false);
  };

  const handleThreads = () => {
    setNewsTabs(false);
    setThreadsTabs(true);
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
        <Tabs title="News" active={newsTabs} onClick={handleNews} />
        <Tabs title="Threads" active={threadsTabs} onClick={handleThreads} />
        <Tabs title="Ask" active={threadsTabs} />
        <Tabs title="Jobs" active={threadsTabs} />
        <Tabs title="Submit" active={threadsTabs} />
      </div>
      <div>
        <AccountCircleOutlined />
      </div>
    </div>
  );
};

export default Header;

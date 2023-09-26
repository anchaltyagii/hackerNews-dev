import React, { useEffect, useState } from "react";
// import * as service from "../Services/index";
import { newsUrl } from "../../Redux/Services";
import Layout from "../../Components/Layout/Layout";
import moment from "moment/moment";
import "./index.scss";

const Index = () => {
  const [news, setNews] = useState([
    {
      id: "1",
      newsTitle: "Hello News",
    },
  ]);

  const date = new Date();

  useEffect(() => {
    // newsUrl();
  }, []);

  // useEffect(() => {
  //   console.log("minutes");
  // }, [date.getMinutes()]);

  return (
    <>
      <Layout>
        <div className="news_time_container">
          <h3>{`${moment(date).format("DD MMMM YYYY")}`}</h3>
          <span>{`Tuesday [${date.getHours()}:${date.getMinutes()}]`}</span>
        </div>

        <div>
          {news.map((news, key) => {
            return (
              <div key={key} className="news-wrapper">
                <div className="news-title-wrapper">
                  <span>{`${news.id}.`}</span> <h6>{news.newsTitle}</h6>
                </div>
                <div className="news-details-wrapper">
                  <div>etymonline.com</div>
                  <div> Name </div>
                  <div> 5 Points</div>
                  <div> 1 Comments </div>
                  <div> 1 hour ago</div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Index;

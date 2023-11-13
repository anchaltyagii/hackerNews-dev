import React, { useEffect, useState } from "react";
// import * as service from "../Services/index";
import { newsUrl } from "../../Redux/Services";
import * as actions from "../../Redux/Actions/index";
import Layout from "../../Components/Layout/Layout";
import moment from "moment/moment";
import "./index.scss";
import { useDispatch } from "react-redux";

const Index = () => {
  const [newsId, setNewsId] = useState([]);
  const [news, setNews] = useState([]);

  const dispatch = useDispatch();

  const date = new Date();

  useEffect(() => {
    dispatch(
      actions.getNewsIdAction((res) => {
        if (res) {
          console.log("api res", res);
          setNewsId(res);
        }
      })
    );

    if (newsId) {
      for (let i = 0; i < newsId.length; i++) {
        dispatch(
          actions.getNewsByIdAction(newsId[i], (res) => {
            if (res) {
              news.push(res);
            }
          })
        );
      }
    }
  }, [newsId]);

  return (
    <>
      <Layout>
        <div className="news_time_container">
          <h3>{`${moment(date).format("DD MMMM YYYY")}`}</h3>
          <span>{`Tuesday [${date.getHours()}:${date.getMinutes()}]`}</span>
        </div>

        <div>
          {news?.map((news, key) => {
            return (
              <div key={key} className="news-wrapper">
                <div className="news-title-wrapper">
                  <a href={news.url} target="_blank">
                    <span>{`${key + 1}. `}</span> <h6>{news.title}</h6>
                  </a>
                </div>
                <div className="news-details-wrapper">
                  <div>{news.url}</div>
                  <div>{news.by}</div>
                  <div>{news.score} Points</div>
                  <div> {news.descendants} Comments </div>
                  {/* <div> 1 hour ago</div> */}
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

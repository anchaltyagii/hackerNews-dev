import React, { useEffect, useState } from "react";
// import * as service from "../Services/index";
import { newsUrl } from "../../Redux/Services";
import * as actions from "../../Redux/Actions/index";
import Layout from "../../Components/Layout/Layout";
import moment from "moment/moment";
import "./index.scss";
import Pagination from "@mui/material/Pagination";
import { ArrowUpward, VisibilityOffRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";

const Index = () => {
  const [newsId, setNewsId] = useState([]);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const date = new Date();

  // const page = 2;

  useEffect(() => {
    dispatch(
      actions.getNewsIdAction(page, (res) => {
        if (res) {
          // console.log("api res", res);
          setNews(res);
        }
      })
    );

    if (newsId) {
      // for (let i = 0; i < newsId.length; i++) {
      //   dispatch(
      //     actions.getNewsByIdAction(newsId[i], (res) => {
      //       if (res) {
      //         news.push(res);
      //       }
      //     })
      //   );
      // }
    }
  }, [page]);

  const handleChange = () => {
    setPage(page + 1);
  };

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
              <>
                <div key={key} className="news-wrapper">
                  <div style={{width: "60%"}}>
                    <div className="news-title-wrapper">
                      <a href={news.url} target="_blank">
                        <span>{`${key + 1}. `}</span> <h6>{news.title}</h6>
                      </a>
                    </div>
                    <div className="news-details-wrapper">
                      <div>{news.domain}</div>
                      <div>{news.user}</div>
                      <div>{news.points} Points</div>
                      <div> {news.comments_count} Comments </div>
                      <div> {news.time_ago}</div>
                    </div>
                  </div>

                  <div className="upvote-icon-wrapper">
                    <ArrowUpward
                      titleAccess="UpVote"
                      style={{ cursor: "pointer" }}
                    />
                    <VisibilityOffRounded
                      titleAccess="Hide"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* <Pagination
          count={10}
          color="primary"
          page={page}
          onChange={handleChange}
        /> */}
        <button onClick={() => setPage(page - 1)}>Previous</button>
        Page: {page}
        <button onClick={() => setPage(page + 1)}>Next</button>
      </Layout>
    </>
  );
};

export default Index;

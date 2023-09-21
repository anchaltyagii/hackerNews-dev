import React, { useEffect } from "react";
// import * as service from "../Services/index";
import { newsUrl } from "../../Redux/Services";
import Layout from "../../Components/Layout/Layout";

const Index = () => {
  useEffect(() => {
    // newsUrl();
  }, []);
  return (
    <div>
      <Layout>Home Page</Layout>
    </div>
  );
};

export default Index;

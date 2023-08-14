import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Recipe Website</h1>
          <p>Top food in India</p>
          <Link to="/menu">
            <button>BUY NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
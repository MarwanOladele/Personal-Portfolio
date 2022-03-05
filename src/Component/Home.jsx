import React from "react";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="background">
        <section className="home">
          <button className="hot">
            <span>hot</span> Looking for a Frontend Developer?
          </button>
          <h1>
            Here, I'm Marwan <br /> Oladele
          </h1>
          <p className="content">
            Obviously I'm Frontend Developer, I spend my whole day, practically
            everyday, experimenting <br /> with React, JavaScript, CSS, HTML and
            other tools.
          </p>
          <div className="hire-cv">
            <Link to="/contact">
              <button className="hireMe">Hire me</button>
            </Link>
            <a href="#">
              <button className="downloadCV">
                Download CV < BsDownload className="bsdownload" />
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Routes from "../constants/Routes";
import rickMorty from"../../images/rick-and-morty-13.png"
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div className="row justify-content-center home">
      <div className="card mb-3 home-card">
        <div className="row">
          <div className="col-xl-7">
            <img src={rickMorty} alt="rick & morty"/>
          </div>
          <div className="col-xl-5">
            <div className="card-body content">
              <h5 className="card-title">Choose your favourite Rick & Morty characters.</h5>
              <p className="lead">This simple app is made for fun creating your own list of favorite characters.</p>
              <br/>
              <p className="card-text text-muted lead">Ready ...?</p>
              <p className="lead">
                <Button outline color="primary" size="lg" tag={ Link } to={ Routes.CHARACTER }>Let's have fun ...</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
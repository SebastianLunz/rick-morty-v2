import React from "react";
import UseFetch from "../shared/UseFetch";


const PageFooter = () => {
  const { itemCount: charactersCount } = UseFetch('https://rickandmortyapi.com/api/character');
  const { itemCount: locationsCount } = UseFetch('https://rickandmortyapi.com/api/location');
  const { itemCount: episodesCount } = UseFetch('https://rickandmortyapi.com/api/episode');

  return (
    <div className="row justify-content-center page-footer">
      <div className="card mb-3 bg-transparent footer-card">
        <div className="row text-center text-uppercase font-weight-bold">
          <div className="col-4">
            <p className="card-text text-muted">Characters: {charactersCount}</p>
          </div>
          <div className="col-4">
            <p className="card-text text-muted">Locations: {locationsCount}</p>
          </div>
          <div className="col-4">
            <p className="card-text text-muted">Episodes: {episodesCount}</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 footer-created">
            <p className="card-text text-muted">Created by <span className="name-color"> Sebastian Lunz </span> 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
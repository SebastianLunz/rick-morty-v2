import React from "react";
import rickMorty from"../../images/rick-and-morty-9-2.png"
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import Routes from "../constants/Routes";


const Favorites = ({ favorites, handleRemoveFromFavoriteClick }) => {
  return (
    <div className="row justify-content-center">
      {
        favorites.length === 0 ?
          <div className="card mb-3 home-card home">
            <div className="row">
              <div className="col-xl-6">
               <img src={rickMorty} alt="rick & morty"/>
              </div>
              <div className="col-xl-6">
                <div className="card-body content">
                  <h2 className="card-title">You didn't choose your favourite characters yet...</h2>
                  <p className="lead">This simple app is made for fun, creating your own list of favorite characters.</p>
                  <br/>
                  <p className="card-text text-muted lead">Ready ...?</p>
                  <p className="lead">
                    <Button outline color="primary" size="lg" tag={ Link } to={ Routes.CHARACTER }>Let's have fun ...</Button>
                  </p>
               </div>
             </div>
           </div>
          </div> :
        favorites.map(favorite => (
          <div key={favorite.id} className="card mb-3 character-card">
            <div className="row">
              <div className="col-md-5 ">
                <img src={favorite.image} alt={favorite.name}/>
              </div>
              <div className="col-md-7">
                <div className="card-body character-card-body">
                  <h5 className="card-title">{favorite.name}</h5>
                  <p className="card-text">{favorite.status} - {favorite.species}</p>
                  <p className="card-text text-muted pg-top-5">Last known location:</p>
                  <p className="card-text">{favorite.origin.name}</p><br/>
                  <p className="card-text">
                    <button
                      onClick={() => handleRemoveFromFavoriteClick(favorite.id)}
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Remove from favourite
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Favorites;
import React, { useState } from "react";
import {getFavorite, removeFavorite} from "./FavoriteStorage";
import Favorites from "./Favorites"


const FavoritesContainer = () => {
  const [ favorites, setFavorites ] = useState(() => getFavorite());

  const handleRemoveFromFavoriteClick = (id) => {
    const updatedFavorites = removeFavorite(id);
    setFavorites(updatedFavorites);
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="card mb-3 bg-transparent">
          <h3 className="text-uppercase text-muted text-center">Favourite characters: {favorites.length}.</h3>
        </div>
      </div>
      <Favorites favorites={favorites} handleRemoveFromFavoriteClick={handleRemoveFromFavoriteClick}/>
    </>
  );
}

export default FavoritesContainer;
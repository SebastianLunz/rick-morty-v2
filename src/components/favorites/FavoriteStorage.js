const setFavorite = (character) => {
  let favoriteContainer = JSON.parse(localStorage.getItem("favoriteContainer")) || [];

  if ((favoriteContainer.filter(favorite => favorite.id === character.id)).length === 0) {
    favoriteContainer.push(character);
    localStorage.setItem("favoriteContainer", JSON.stringify(favoriteContainer));
  }
};


const getFavorite = () => {
  let favorites = JSON.parse(localStorage.getItem("favoriteContainer")) || [];
  return favorites;
};


const removeFavorite = (id) => {
  let favoriteConatiner = JSON.parse(localStorage.getItem("favoriteContainer")) || [];

  const favoriteToRemove = favoriteConatiner.findIndex(favorite => favorite.id === id);

  if (favoriteToRemove !== -1) {
    favoriteConatiner.splice(favoriteToRemove, 1);
    localStorage.setItem("favoriteContainer", JSON.stringify(favoriteConatiner));
  }
  return favoriteConatiner;
};


export {
  setFavorite,
  getFavorite,
  removeFavorite,
};
import React, { useState } from "react";
import UseFetch from "../shared/UseFetch";
import Characters from "./Characters";
import getRepository from "../shared/GetRepository";
import {getFavorite, setFavorite} from "../favorites/FavoriteStorage";
import PaginationLink from "../shared/PaginationLink";
import { Row } from "reactstrap";


const CharactersContainer = () => {
  const repository = "character";
  const repositoryUrl = window.location.href;
  const suffixUrl = getRepository(repositoryUrl);

  const {
    data: characters,
    dataInfo: charactersInfo,
    isLoading,
    error,
    numberOfPages,
  } = UseFetch(`https://rickandmortyapi.com/api/character${suffixUrl}`);

  const [addedToFavorite, setAddedToFavorite] = useState(() => {
    const favorites = getFavorite();
    return favorites.map(favorite => favorite.id);
  });

  const handleAddToFavoriteClick = (character) => {
    setFavorite(character);
    setAddedToFavorite([...addedToFavorite, character.id]);
  };

  return (
    <>
      { error && <div>{error}</div> }
      { isLoading && <div>{isLoading}</div>}
      {
        characters && charactersInfo &&
        <Characters
          characters={characters}
          addedToFavorite={addedToFavorite}
          handleAddToFavoriteClick={handleAddToFavoriteClick}
        />
      }
      <Row style={{justifyContent: "center", padding: "50px 0"}}>
        <PaginationLink numberOfPages={numberOfPages} repository={repository}/>
      </Row>
    </>
  );
};

export default CharactersContainer;
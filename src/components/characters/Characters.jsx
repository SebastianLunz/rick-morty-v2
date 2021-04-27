import React from "react";


const Characters = ({ characters, addedToFavorite, handleAddToFavoriteClick }) => {
  return (
    <div className="row justify-content-center">
      {
        characters.map(character => (
          <div key={character.id} className="card mb-3 character-card">
            <div className="row">
              <div className="col-md-5">
                <img src={character.image} alt={character.name}/>
              </div>
              <div className="col-md-7">
                <div className="card-body character-card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">{character.status} - {character.species}</p>
                  <p className="card-text text-muted pg-top-5">Last known location:</p>
                  <p className="card-text">{character.location.name}</p><br/>
                  <p className="card-text">
                    {
                      addedToFavorite.includes(character.id)
                        ? <span className="status"><span className="icon"></span>Added to favourite</span>
                        : <button
                            onClick={() => handleAddToFavoriteClick(character)}
                            type="button"
                            className="btn btn-outline-light"
                          >
                            Add to favourite
                          </button>
                    }
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

export default Characters;
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Characters = () => {
  const [character, setcharacter] = useState([]);

  const endpointApi = "https://rickandmortyapi.com/api/character";

  const hadleCharacters = (url) => {
    const request = axios.get(url).then((data) => {
      setcharacter(data.data.results);
      console.log(data.data.results);
    });
    console.log(request);
  };

  useEffect(() => {
    hadleCharacters(endpointApi);
  }, []);

  return (
    <div className="row mt-4">
        {character.map((item,index) =>
        <div key={index} className="col-4" >
            <div className="card" >
                <img src={item.image} alt="" />
            </div>
            <div className="card-body">
                <h5>{item.name}</h5>
                <hr />
                <p>Especie: {item.species}</p>
                <p>Location: {item.location.name}</p>
            </div>

        </div>
        )}
      </div>
  );
};

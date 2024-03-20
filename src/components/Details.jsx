import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = function () {
  const [movieObj, setMovieObj] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  fetch("http://www.omdbapi.com/?apikey=ba8eda7c&i=" + params.movieId)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dei dati richiesti");
      }
    })
    .then()
    .catch((error) => console.log(error));

  useEffect(() => {}, []);
};

export default Details;

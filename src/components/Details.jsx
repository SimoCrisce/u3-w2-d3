import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Details = function () {
  const [movieObj, setMovieObj] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=ba8eda7c&i=" + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((movie) => {
        setMovieObj(movie);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container className="mt-3" style={{ width: "400px" }}>
      {movieObj && (
        <Card>
          <Card.Img variant="top" src={movieObj.Poster} />
          <Card.Body>
            <Card.Title>{movieObj.Title}</Card.Title>
            <Card.Text className="d-flex justify-content-between">
              <div>Voto: {movieObj.imdbRating} / 10</div>
              <div>Anno: {movieObj.Year}</div>
            </Card.Text>
            <Card.Text>Trama: {movieObj.Plot}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Details;

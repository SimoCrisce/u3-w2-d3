import { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
  };

  fetchMovies = function () {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ba8eda7c&s=" + this.props.film)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati richiesti");
        }
      })
      .then((moviesFetch) => {
        console.log(moviesFetch);
        this.setState({
          movies: moviesFetch.Search,
        });
      })
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    console.log("COMPONENT");
    this.fetchMovies();
  }
  render() {
    return (
      <Row>
        {this.state.movies.slice(0, 6).map((movie) => {
          return (
            <Col xs={12} sm={6} md={3} lg={2} key={movie.imdbID}>
              <Link to={"/details/" + movie.imdbID}>
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              </Link>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Movies;

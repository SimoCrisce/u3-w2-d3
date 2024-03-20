import Movies from "./Movies";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const MainContent = function () {
  return (
    <div className="px-4 pt-2">
      <div className="text-white">
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex ">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#a">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#a">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#a">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
          <div className="d-flex gap-4 me-3">
            <Grid />
            <Grid3x3 />
          </div>
        </div>
        <h4>Trending Now</h4>
        <Movies film={"superman"} />
        <h4>Watch it Again</h4>
        <Movies film={"harry-potter"} />
        <h4>New Releases</h4>
        <Movies film={"batman"} />
      </div>
    </div>
  );
};

export default MainContent;

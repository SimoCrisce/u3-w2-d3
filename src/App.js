import "./App.css";
import MyHeader from "./components/MyHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "./components/MainContent";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/tv-shows" element={<MainContent />} />
          <Route path="/details/:movieId" element={<Details />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

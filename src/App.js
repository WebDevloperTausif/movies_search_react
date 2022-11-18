import "./App.css";
import Movie from "./compontes/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compontes/Home";
import MoviesSearch from "./compontes/MoviesSearch";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MoviesSearch />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </>
  );
}

export default App;

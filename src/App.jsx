import { Routes, Route } from "react-router-dom";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/MoviesPage/MoviesPage";
import "./App.css";

function App() {
  return (
    <>
      <Section isHeader>
        <Container>
          <Navigation />
        </Container>
      </Section>
      <Section>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
          </Routes>
        </Container>
      </Section>
    </>
  );
}

export default App;

// Where to put header

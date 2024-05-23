import { Routes, Route } from "react-router-dom";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <>
      {/* Add inside header */}
      <Section isHeader>
        <Container>
          <Navigation />
        </Container>
      </Section>
      <main>
        <Section>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="movies/:id" element={<MovieDetailsPage />}>
                <Route path="movie-cast" element={<MovieCast />} />
                <Route path="movie-reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App;

// userScore
// Where to put header
// try - catch?
// check percentage calculation
// check for empty reviews or cast

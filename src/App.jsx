import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Section isHeader>
        <Container>
          <Navigation />
        </Container>
      </Section>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<div>Loading page...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                  <Route path="cast" element={<MovieCast />} />
                  <Route path="reviews" element={<MovieReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App;

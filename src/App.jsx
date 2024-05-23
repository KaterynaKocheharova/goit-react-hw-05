// import { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import NotFound from '../pages/NotFound';
// import { AppBar } from './AppBar';
// import css from './App.module.css';

// const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));
// const ProductDetails = lazy(() => import('../pages/ProductDetails'));
// const Products = lazy(() => import('../pages/Products'));
// const Mission = lazy(() => import('./Mission'));
// const Team = lazy(() => import('./Team'));
// const Reviews = lazy(() => import('./Reviews')); - EXAMPLE - do the same with my codeimport { Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Section from "./components/Section/Section";
// import Container from "./components/Container/Container";
// import Navigation from "./components/Navigation/Navigation";
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import "./App.css";

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

{
  /* Add inside header */
}

// userScore
// Where to put header
// try - catch?
// check percentage calculation
// check for empty reviews or cast
// зробити безпосерднє повернення на фільки які ми тільки що шукали з деталей

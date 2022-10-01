import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

const Home = lazy(() => import('../pages/Home/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const Movies = lazy(() => import('../pages/MoviesPage/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetailsPage = lazy(() =>
    import('../pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route
                        path="/movies/:movieId"
                        element={<MovieDetailsPage />}
                    >
                        <Route path="cast" element={<Cast />} />
                        <Route path="review" element={<Reviews />} />
                    </Route>
                </Route>
                <Route path="*" element={<div>Not Founded</div>} />
            </Routes>
            <GlobalStyle />
        </>
    );
};

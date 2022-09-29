import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Header } from './Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Movies } from '../pages/MoviesPage/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="movies" />
                    <Route
                        path="movies/:movieId"
                        element={<MovieDetailsPage />}
                    >
                        <Route path="credits" />
                        <Route path="reviews" />
                    </Route>
                    <Route path="*" element={<div>not found</div>} />
                </Route>
            </Routes>
            <GlobalStyle />
        </>
    );
};

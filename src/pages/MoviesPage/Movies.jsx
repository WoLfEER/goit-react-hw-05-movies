import { Searchbox } from 'components/Searchbox/Searchbox';
import { MovieListSearch } from 'components/MovieList/MovieListSearch';
import { useSearchParams, Outlet } from 'react-router-dom';
import { searchMovie } from 'utils/api';
import { useState, useEffect } from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query === '') {
            return;
        }

        searchMovie(query).then(setMovies);
    }, [query, setSearchParams]);

    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    };

    return (
        <div>
            <Searchbox onSubmit={updateQueryString} />
            {movies.length > 0 && <MovieListSearch movies={movies} />}
        </div>
    );
};

export default Movies;

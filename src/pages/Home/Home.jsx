import { getPopularMovies } from '../../utils/api';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Home = () => {
    const [popularFilms, setPopularFilms] = useState([]);
    const IMAGE_URL = 'https://image.tmdb.org/t/p/';

    useEffect(() => {
        getPopularMovies().then(res => setPopularFilms(res));
    }, []);

    return (
        <div>
            <ul>
                {popularFilms.map(({ id, title, poster_path: img }) => (
                    <li key={id}>
                        <Link to={`movies/${id}`} id={id}>
                            <p>{title}</p>
                            <img src={IMAGE_URL + 'w500' + img} alt={title} />
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

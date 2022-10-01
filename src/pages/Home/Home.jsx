import { getPopularMovies } from '../../utils/api';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { Container } from 'components/GlobalStyle';
import { MovieList, MovieItem, MovieLink } from './Home.styled';

const Home = () => {
    const [popularFilms, setPopularFilms] = useState([]);
    const IMAGE_URL = 'https://image.tmdb.org/t/p/';

    useEffect(() => {
        getPopularMovies().then(res => setPopularFilms(res));
    }, []);

    return (
        <Section>
            <Container>
                <MovieList>
                    {popularFilms.map(({ id, title, poster_path: img }) => (
                        <MovieItem key={id}>
                            <MovieLink to={`movies/${id}`} id={id}>
                                <p>{title}</p>
                                <img
                                    src={IMAGE_URL + 'w500' + img}
                                    alt={title}
                                    height="400"
                                />
                            </MovieLink>
                        </MovieItem>
                    ))}
                </MovieList>
            </Container>
            <Outlet />
        </Section>
    );
};

export default Home;

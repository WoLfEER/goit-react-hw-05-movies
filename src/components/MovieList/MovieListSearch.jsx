import { Container } from 'components/GlobalStyle';
import { Section } from 'components/Section/Section';
import { MovieLink, MovieItem, MovieList } from 'pages/Home/Home.styled';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieListSearch = ({ movies }) => {
    const location = useLocation();
    console.log(location);

    const IMAGE_URL = 'https://image.tmdb.org/t/p/';
    return (
        <>
            <Section>
                <Container>
                    <MovieList>
                        {movies.map(({ id, title, poster_path: img }) => (
                            <MovieItem key={id}>
                                <MovieLink
                                    to={`/movies/${id}`}
                                    state={{ from: location }}
                                >
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
        </>
    );
};

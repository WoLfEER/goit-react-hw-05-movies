import { getMovieDetails } from 'utils/api';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { Container } from 'components/GlobalStyle';
import { AiFillBackward } from 'react-icons/ai';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        getMovieDetails(movieId).then(setDetails);
    }, [movieId]);

    const location = useLocation();
    console.log(location);
    const IMAGE_URL = 'https://image.tmdb.org/t/p/';

    return (
        <>
            {details && (
                <Section>
                    <Container>
                        <button>
                            <AiFillBackward />
                            Go Back
                        </button>
                        <div>
                            {details.poster_path && (
                                <img
                                    height="400"
                                    src={
                                        IMAGE_URL + 'w500' + details.poster_path
                                    }
                                    alt={details.title}
                                />
                            )}
                            <h2> {details && details.title}</h2>
                            <p>User Score: {details.vote_average.toFixed(1)}</p>
                            <h3>Overview</h3>
                            <p>{details && details.overview}</p>
                            <h3>Genres</h3>
                            <p>
                                {details.genres &&
                                    details.genres
                                        .map(genre => genre.name)
                                        .join(' ')}
                            </p>
                        </div>
                    </Container>
                </Section>
            )}

            <Section>
                <div>
                    <h2>Additional information</h2>
                </div>
            </Section>

            <Outlet />
        </>
    );
};

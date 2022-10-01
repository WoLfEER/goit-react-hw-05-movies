import { getMovieDetails } from 'utils/api';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { Container } from 'components/GlobalStyle';
import { AiFillBackward } from 'react-icons/ai';

import {
    LinkInfo,
    BackLink,
    Img,
    Wrapper,
    TextWrapper,
    Title,
    SecondaryTitle,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
    const [details, setDetails] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        getMovieDetails(movieId).then(setDetails);
    }, [movieId]);

    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    const IMAGE_URL = 'https://image.tmdb.org/t/p/';

    return (
        <>
            {details && (
                <Section>
                    <Container>
                        <BackLink to={backLink}>
                            <AiFillBackward />
                            Go Back
                        </BackLink>
                        <Wrapper>
                            {details.poster_path && (
                                <Img
                                    height="400"
                                    src={
                                        IMAGE_URL + 'w500' + details.poster_path
                                    }
                                    alt={details.title}
                                />
                            )}
                            <TextWrapper>
                                <Title>
                                    {details && details.title}
                                    <span>
                                        &nbsp;(
                                        {details.release_date.slice(0, 4)})
                                    </span>
                                </Title>
                                <p>
                                    User Score:
                                    {details.vote_average.toFixed(1)}
                                </p>
                                <SecondaryTitle>Overview</SecondaryTitle>
                                <p>{details && details.overview}</p>
                                <SecondaryTitle>Genres</SecondaryTitle>
                                <p>
                                    {details.genres &&
                                        details.genres
                                            .map(genre => genre.name)
                                            .join(' ')}
                                </p>
                            </TextWrapper>
                        </Wrapper>
                    </Container>
                </Section>
            )}

            <Section>
                <Container>
                    <div>
                        <SecondaryTitle>Additional information</SecondaryTitle>
                        <ul>
                            <li>
                                <LinkInfo to="cast" state={location.state}>
                                    Cast
                                </LinkInfo>
                            </li>
                            <li>
                                <LinkInfo to="review" state={location.state}>
                                    Review
                                </LinkInfo>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Section>
            <Outlet />
        </>
    );
};

export default MovieDetailsPage;

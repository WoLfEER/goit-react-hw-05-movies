import { getMovieCredits } from 'utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'components/GlobalStyle';
import { Section } from 'components/Section/Section';
import { Item, List, Title } from './Cast.styled';
import avatar from '../../images/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg';

const Cast = () => {
    const [movieCast, setMovieCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCredits(movieId).then(setMovieCast);
    }, [movieId]);

    const IMAGE_URL = 'https://image.tmdb.org/t/p/';

    return (
        <>
            {movieCast && (
                <Section>
                    <Container>
                        <List>
                            {movieCast.cast.map(
                                ({
                                    id,
                                    profile_path,
                                    name,
                                    original_name,
                                    character,
                                }) => (
                                    <Item key={id}>
                                        {profile_path ? (
                                            <img
                                                src={
                                                    IMAGE_URL +
                                                    'w200' +
                                                    profile_path
                                                }
                                                alt={name || original_name}
                                            />
                                        ) : (
                                            <img
                                                src={avatar}
                                                alt="avatar"
                                                width="185"
                                                height="278"
                                            />
                                        )}

                                        <Title>{name || original_name}</Title>
                                        {character && (
                                            <p>
                                                <b>Character:</b> {character}
                                            </p>
                                        )}
                                    </Item>
                                )
                            )}
                        </List>
                    </Container>
                </Section>
            )}
        </>
    );
};

export default Cast;

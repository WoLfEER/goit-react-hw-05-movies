import { useState, useEffect } from 'react';
import { getMovieReviews } from 'utils/api';
import { useParams } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { Container } from 'components/GlobalStyle';
import { Review, Text } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    console.log(reviews);

    useEffect(() => {
        getMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <Section>
            <Container>
                <ul>
                    {reviews.length > 0 ? (
                        reviews.map(({ author, id, content }) => (
                            <Review key={id}>
                                <Text>
                                    <b>Author:</b> {author}
                                </Text>
                                <Text>{content}</Text>
                            </Review>
                        ))
                    ) : (
                        <Text>Whoops, no info about this film</Text>
                    )}
                </ul>
            </Container>
        </Section>
    );
};

export default Reviews;

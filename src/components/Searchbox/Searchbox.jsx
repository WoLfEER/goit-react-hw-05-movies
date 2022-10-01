import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { Form, Input, SearchBtn } from './Searchbox.styled';

export const Searchbox = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(query);
        setQuery('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                autoFocus
                type="text"
                name="film name"
                value={query}
                onChange={handleInputChange}
                placeholder="Find your film "
            />
            <SearchBtn type="submit">Search {<FaSistrix />}</SearchBtn>
        </Form>
    );
};

Searchbox.propTypes = {
    handleSubmit: PropTypes.func,
};

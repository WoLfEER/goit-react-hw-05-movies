import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 34px;
`;

export const MovieItem = styled.li`
    display: flex;
    text-align: center;
    border-radius: 12px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 3px -4px red;
    opacity: 0.9;
    &:hover,
    &:focus {
        transform: scale(1.01);
        opacity: 1;
    }
`;

export const MovieLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
    transition: all 0.1s ease-in-out;
    ${MovieItem}:hover &,
  ${MovieItem}:focus & {
        color: #bf5a36;
    }
`;

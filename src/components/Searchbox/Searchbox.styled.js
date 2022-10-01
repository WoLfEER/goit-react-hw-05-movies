import styled from 'styled-components';
import { SiThemoviedatabase } from 'react-icons/si';

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 60vw;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    font: inherit;
    font-size: 1.2rem;
    border: none;
    outline: none;

    padding-left: 8px;
    padding-right: 8px;
`;

export const SearchBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    background-color: #bf5a36;
    outline: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
        background-color: #f2b885;
    }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkInfo = styled(Link)`
    color: #5f6775;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: #bf5a36;
    }
`;

export const BackLink = styled(Link)`
    color: #5f6775;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: #bf5a36;
    }
`;

export const Img = styled.img`
    width: 20%;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-left: 20px;
`;

export const Title = styled.h2`
    color: #bf5a36;
`;

export const SecondaryTitle = styled.h3`
    color: #f2b885;
`;

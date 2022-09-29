import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 7px 17px;
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
    color: #fff;
    transition: all 0.2s ease-in-out;
    &.active {
        color: #2da8d8ff;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #d9514eff;
    }
`;
export const HeaderStyled = styled.header`
    margin-bottom: 30px;
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 4px, rgb(0 0 0 / 30%) 0px 7px 13px -3px,
        rgb(0 0 0 / 20%) 0px -3px 0px inset;
`;

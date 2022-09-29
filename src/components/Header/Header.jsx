import { Outlet } from 'react-router-dom';
import { Link, HeaderStyled } from './Header.styled';

const navItems = [
    { href: 'home', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

export const Header = () => {
    return (
        <Header>
            <nav>
                {navItems.map(({ href, text }) => (
                    <li key={href}>
                        <Link to={href}>{text}</Link>
                    </li>
                ))}
                <Outlet />
            </nav>
        </Header>
    );
};

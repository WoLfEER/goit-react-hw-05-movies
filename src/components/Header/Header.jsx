import { Link } from './Header.styled';
import { Container } from 'components/GlobalStyle';
import { HeaderStyled } from './Header.styled';

const navItems = [
    { href: 'home', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <nav>
                    <ul>
                        {navItems.map(({ href, text }) => (
                            <li key={href}>
                                <Link to={href}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </HeaderStyled>
    );
};

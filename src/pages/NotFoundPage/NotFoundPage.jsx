import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <>
            <p>
                Page was not found, please visit to a
                <Link path to="/">
                    HOME
                </Link>
            </p>
        </>
    );
};

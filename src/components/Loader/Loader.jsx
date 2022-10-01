import { ProgressBar } from 'react-loader-spinner';
import React from 'react';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderWrap>
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#bf5a36"
                barColor="#51E5FF"
            />
        </LoaderWrap>
    );
};

export default Loader;

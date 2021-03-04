import React from 'react';
import {NextPage, GetStaticProps} from 'next'

const Custom404: NextPage = () => {
    return <h1>404 - Page Not Found</h1>
}

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} };
};

export default Custom404;
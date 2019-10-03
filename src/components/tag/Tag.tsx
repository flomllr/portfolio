/* eslint-disable react/prop-types */
import * as React from 'react';
import styles from './Tag.module.css';

interface TagProps {
    title: string;
}

const Tag: React.FunctionComponent<TagProps> = ({ title }) => {
    return (
        <div className={styles.box}>
            <p>{title}</p>
        </div>
    );
};

export default Tag;

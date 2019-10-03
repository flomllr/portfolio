/* eslint-disable react/prop-types */
import * as React from 'react';
import Tilt from 'react-tilt';
import styles from './Project.module.css';
import Tag from '../tag/Tag';

export interface ProjectProps {
    title: string;
    type: string;
    tags: string[];
    description: string;
    url?: string;
    spotlight?: boolean;
    image?: string;
    linktext?: string;
    category?: string;
}

const Project: React.FunctionComponent<ProjectProps> = ({
    spotlight,
    title,
    type,
    tags,
    description,
    image,
    url,
    linktext,
}) => {
    return (
        <Tilt
            className={styles.box + (spotlight ? ' ' + styles.spotlight : '')}
            options={{ reverse: true, scale: 1, max: 4 }}
        >
            {spotlight ? <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div> : undefined}
            <div className={styles.text}>
                <p>{type}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                {url ? <a href={url}>{linktext || url}</a> : undefined}
                <div className={styles.tagsBox}>
                    {tags.map((tag, index) => (
                        <Tag key={index} title={tag} />
                    ))}
                </div>
            </div>
        </Tilt>
    );
};

export default Project;

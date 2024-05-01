import React, {FC} from 'react';
import styles from './Character.module.css';


interface IProps {
    name: string;
    image: string;
    // children?: React.ReactNode;
}
// type ItypeProps = IProps& {children?: React.ReactNode}
type PropsWithChildren <T> = T & {children?: React.ReactNode};

const Character:FC<PropsWithChildren<IProps>> = ({name, image, children}) => {
    return (
        <div className={[styles.character, styles.back].join(' ')}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;




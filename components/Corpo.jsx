import { useState } from 'react';
import styles from '../styles/Body.module.css';

export default function Corpo() {
    const [x, setX] = useState(0);

    function mais(){
        setX(x+1);
        return x;
    }
    function menos(){
        setX(x-1);
        return x;
    }

    return(
        <div className={styles.Body}>
            <h1>{x}</h1>
            <button className={styles.mais} onClick={mais}> + </button>
            <button className={styles.menos} onClick={menos}> - </button>
        </div>
    )
}
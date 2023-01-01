import React, {FC} from 'react';
import Link from "next/link";
import Image from 'next/image'
import styles from './Card.module.css'

type dataProps = {
    src: string,
    name: string,
    path: string
}

const Card:FC<dataProps> = ({src, name, path}) => {
    if (src === "") {
        src = "/assets/img/placeholder.jpg"
    } else {

    }
    return (
        <div className={"col " + styles.col}>
            <Link href={path}>
                <div className={"card " + styles.card}>
                    <div className="card-body">
                        <div className={styles.img}>
                            <Image
                                className={styles.img}
                                src={src} alt={name}
                                layout='fill'
                            />
                        </div>
                        <h5>{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
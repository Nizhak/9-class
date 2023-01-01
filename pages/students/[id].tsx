import styles from "../../styles/about.module.css"
import { FC } from "react"
import Head from "next/head";
import Image from "next/image";
import { cardType } from "../../types"

type aboutInfoProps = {
    data: cardType,
}

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.API_HOST}/students/${context.query.id}`);
    if (response.status === 404) {
        return {
            notFound: true,
        }
    }
    const data = await response.json();
    return {
        props: {
            data
        },
    }
}

const About:FC<aboutInfoProps> = ({ data }) => {

    const title = `9Б Класс - ${data.name}`

    if (data.src === "") {
        data.src = "/assets/img/placeholder.jpg"
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{title}</title>
            </Head>
            <style jsx global>{`
              header {
                position: relative;
                backdrop-filter: none
              }
            `}</style>
            <div className={styles.main}>
                <div className={styles.img}>
                    <Image src={data.src} alt={data.alt} layout="fill"/>
                </div>
                <div className={styles.text}>
                    <h1>{data.name}</h1>
                    <p>{data.about}</p>
                </div>
            </div>
        </>
    );
};

    export default About;
import styles from "../../styles/about.module.css"
import Head from "next/head";
import Image from "next/image";
import {cardType} from "../../types";
import {FC} from "react";

type aboutInfoProps = {
    data: cardType,
}

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.API_HOST}/teacher/${context.query.id}`);
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
    let theTeacher: JSX.Element

    if (data.teacher) {
        theTeacher = <h5>Учитель: {data.teacher}</h5>
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
                <Image className={styles.img} src={data.src} alt={data.alt} />
                <div className={styles.text}>
                    <h1>{data.name}</h1>
                    {theTeacher}
                    <p>{data.about}</p>
                </div>
            </div>
        </>
    );
};

export default About;
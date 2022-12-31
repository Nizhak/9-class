import styles from "../../styles/about.module.css"
import Head from "next/head";
import Image from "next/image";

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

const About = ({ data }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>9Б Класс - {data.name}</title>
            </Head>
            <div className={styles.main}>
                <Image placeholder="blur" className={styles.img} src={data.src} alt={data.alt} />
                <div className={styles.text}>
                    <h1>{data.name}</h1>
                    <p>{data.about}</p>
                </div>
            </div>
        </>
    );
};

export default About;
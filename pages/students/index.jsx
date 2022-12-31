import Card from "../../companents/UI/Card/Card";
import Head from "next/head";
import styles from "../../styles/studentsTeacher.module.css"
import oneImg from "../../assets/img/one.png";
import Image from "next/image";

export async function getServerSideProps() {
    const response = await fetch(`${process.env.API_HOST}/students`);
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

const Students = ({ data }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>9Б Класс - Ученики</title>
            </Head>
            <div className={styles.one}>
                <div className={styles.name}>
                    <h1>Самый 9 Класс</h1>
                    <h1>Самой 9 Школы</h1>
                </div>
                <Image placeholder="blur" className={styles.img} src={oneImg} alt="illustration" />
            </div>
            <div className={styles.two}>
                <h2>Ученики:</h2>
                <div className="row row-cols-3 row-cols-lg-6 g-3">
                    {data.map(({ id, name, src }) => (
                        <Card key={id} name={name} src={src} path={`/students/${id}`}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Students;
import Card from "../../companents/UI/Card/Card";
import Head from "next/head";
import styles from "../../styles/studentsTeacher.module.css";
import oneImg from "../../assets/img/one.png";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../companents/UI/Loader/loader";

const Teacher = () => {

    const [isLoading, setLoaded]:any = useState(false)
    const [data, setData]:any = useState()

    useEffect( () => {
        start()
    },[])

    const start = async () => {
        setLoaded(true)
        axios.get("/api/teacher").then(data => {
            setData(data.data)
            return data.data
        })
        setLoaded(false)
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>9Б Класс - Учителя</title>
            </Head>
            <div className={styles.one}>
                <div className={styles.name}>
                    <h1>Самый 9 Класс</h1>
                    <h1>Самой 9 Школы</h1>
                </div>
                <Image placeholder="blur" className={styles.img} src={oneImg} alt="illustration" />
            </div>

            <div className={styles.two}>
                <h2>Учителя:</h2>
                {
                    isLoading
                        ? <Loader />
                        : data?.length
                            ? <div className="row row-cols-3 row-cols-lg-6 g-3">
                                {data.map(({ id, name, src }) =>
                                    <Card key={id} src={src} name={name} path={`/teacher/${id}`} />
                                )}
                            </div>
                            : <h2 className={styles.notFound}>Не найдено!!!</h2>
                }
            </div>
        </>
    );
};

export default Teacher;
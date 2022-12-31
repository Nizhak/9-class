import Head from 'next/head'
import styles from '../styles/index.module.css'



export default function Home() {
  return (
      <>
          <Head>
              <title>9Б Класс - Главная</title>
              <meta charSet="UTF-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          <div className={styles.one}>
              <div className={styles.name}>
                  <h1>Самый 9 Класс</h1>
                  <h1>Самой 9 Школы</h1>
              </div>
              <img src="/assets/img/one.png" alt="illustration" />
          </div>

          <div className={styles.two}>
              <h2>Классный руководитель</h2>
              <div>
                  <div className={styles.twoInfo}>
                      <h3>Лифанова Олеся Владимировна</h3>
                      <p>Описание:</p>
                  </div>
                  <img className={styles.twoImg} src="/assets/img/Олеся.png" alt="Фото Олеси Владимировны" />
              </div>
          </div>

          <div className={styles.three}>
              <img src="/assets/img/two.jpg" alt="Фото класса" />
                  <div>
                      <h3>О классе:</h3>
                      <p>Описание:</p>
                  </div>
          </div>
      </>
  )
}

import "../libs/bootstrap/css/bootstrap.min.css";
import '../styles/globals.css'
import MyHeader from "../companents/UI/MyHeader/MyHeader";
import MyFooter from "../companents/UI/MyFooter/MyFooter";

export default function App({ Component, pageProps }) {
  return <>
    <MyHeader />

    <main className="main">
      <div className="container">
        <Component {...pageProps} />
      </div>
    </main>
    <MyFooter />
  </>
}

import Link from "next/link";
import { useRouter } from 'next/router'
import {useEffect, useState} from "react";

const MyHeader = () => {
    const [index, setIndex] = useState("")
    const [students, setStudents] = useState("")
    const [teacher, setTeacher] = useState("")
    const router = useRouter()
    const pathname = router.pathname
    useEffect(() => {
        if (pathname === "/") {
            setIndex("active")
            setStudents("")
            setTeacher("")
        } else if (pathname === "/students") {
            setStudents("active")
            setIndex("")
            setTeacher("")
        } else if (pathname === "/teacher") {
            setTeacher("active")
            setIndex("")
            setStudents("")
        } else {
            setIndex("")
            setStudents("")
            setTeacher("")
        }
    }, [pathname])

    return (
        <header>
            <div className="container">
                <h2>9Б Класс</h2>
                <nav>
                    <Link className={index} href="/">Главная</Link>
                    <Link className={students} href="students">Ученики</Link>
                    <Link className={teacher} href="teacher">Учителя</Link>
                </nav>
            </div>
        </header>
    );
};

export default MyHeader;
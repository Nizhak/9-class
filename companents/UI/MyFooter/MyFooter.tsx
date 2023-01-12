import React from 'react';
import Link from "next/link";

const MyFooter = () => {
    return (
        <footer>
            <div className="container">
                <div className="name">
                    <h3>9Б Класс</h3>
                    <p className="order-5">© Е. А. Воронин, 2022-2023</p>
                </div>
                <nav>
                    <h4>Навигация:</h4>
                    <ul>
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/students">Ученики</Link></li>
                        <li><Link href="/teacher">Учителя</Link></li>
                    </ul>
                </nav>
                <div>
                    <h4>Разработчик:</h4>
                    <ul>
                        <li>Егор Воронин</li>
                        <li>VK: <a href="https://vk.com/nizhak2007" target="_blank"
                                   rel="noopener noreferrer">@nizhak2007</a></li>
                        <li>Telegram: <a href="https://t.me/nizhak2007" target="_blank"
                                         rel="noopener noreferrer">@nizhak2007</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;
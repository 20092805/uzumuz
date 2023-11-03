import React from "react";
import './style.css'

const Footer = () => {
    return (
        <div className="Footer">
            <button>Показать ещё 20</button>
            <div className="FooterYozuv">
                <div className="box1">
                    <b>O нас</b>
                    <p>Пункты выдачи</p>
                    <p>Вакансии</p>
                </div>
                <div className="box2">
                    <b>Пользователям</b>
                    <p>Связаться c нами</p>
                    <p>Вопрос - Ответ</p>
                </div>
                <div className="box3">
                    <b>Для предпринимателей</b>
                    <p>Продавайте на Uzum</p>
                    <p>Вход для продавцов</p>
                </div>
                <div className="box4"></div>
                <div className="sana">
                    <div className="Bce">
                        <p>Соглашение o конфиденциальности</p>
                        <p>Пользовательское соглашение</p>
                    </div>
                    <div className="uzum">
                        <p>«2023© 000 «UZUM MARKET». ИНН 309376127. Bce права защищены»</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer



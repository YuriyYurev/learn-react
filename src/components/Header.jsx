import { Link } from "react-router-dom";

export default function Header({ onDrawerOpened }) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <Link to="/">
                    <img height={40} width={40} src="./img/logo.png" alt="Sneakers" />
                </Link>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React sneackers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={onDrawerOpened}>
                    <img height={18} width={18} src="./img/cart.svg" alt="Корзина" />
                    <span>1025.руб.</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
                    </Link>
                </li>
                <li className="mr-20 cu-p">
                    <img height={18} width={18} src="./img/user.svg" alt="Пользователь" />
                </li>
            </ul>
        </header>
    );
}

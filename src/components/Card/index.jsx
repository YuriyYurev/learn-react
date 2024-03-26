import React from "react";
import style from "./Card.module.scss";

export default function Card({ id, title, src, price, isFavorite, isCart, onToggleTocart, onFavoriteToggle }) {
    const onPlusClick = () => {
        const changeActive = !isCart;
        onToggleTocart({ id, changeActive });
    };

    const onFavoriteClick = () => {
        const changeFavorite = !isFavorite;
        onFavoriteToggle({ id, changeFavorite });
    };

    return (
        <div className={style.card} id={id}>
            <div className={style.favorite}>
                <img
                    className="cu-p"
                    height={40}
                    width={40}
                    src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
                    alt={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                    onClick={onFavoriteClick}
                />
            </div>
            <img className={style.img} src={src} alt="" />
            <p>{title}</p>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button type="button" className={style.plus} onClick={onPlusClick}>
                    <img
                        height={11}
                        width={11}
                        src={isCart ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                        alt={isCart ? "Удалить" : "Добавить"}
                    />
                </button>
            </div>
        </div>
    );
}

import React from "react";
import style from "./Card.module.scss";

export default function Card({ id, title, src, price, onAddToCart, onRemoveToCart }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const onPlusClick = () => {
        setIsAdded((prev) => !prev);
        onAddToCart({ id, title, src, price, onAddToCart });
    };

    const onFavoriteClick = () => {
        setFavorite((prev) => !prev);
    };

    return (
        <div className={style.card} id={id}>
            <div className={style.favorite}>
                <img
                    className="cu-p"
                    height={40}
                    width={40}
                    src={favorite ? "/img/liked.svg" : "/img/unliked.svg"}
                    alt={favorite ? "Удалить из избранного" : "Добавить в избранное"}
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
                        data-action={isAdded}
                        src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                        alt={isAdded ? "Удалить" : "Добавить"}
                    />
                </button>
            </div>
        </div>
    );
}

import style from "./Drawer.module.scss";

export default function Drawer({ isActive, cards = [], onDrawerClose, onRemoveToBasket }) {
    return (
        <div className={isActive ? `${style.overlay} ${style["is-active"]}` : style.overlay}>
            <div className={style.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Закрыть" onClick={onDrawerClose} />
                </h2>
                {cards.filter((card) => card.isCart === true).length ? (
                    <>
                        <div className={style.items + " flex"}>
                            {cards
                                .filter((card) => card.isCart === true)
                                .map((card) => {
                                    return (
                                        <div className="cardItem d-flex align-center mb-20" key={card.id}>
                                            <div
                                                style={{ backgroundImage: `url(${card.src})` }}
                                                className="cartItemImg"
                                            ></div>
                                            <div className="mr-20 d-flex flex-column">
                                                <p className="mb-5">{card.title}</p>
                                                <b>{card.price} руб.</b>
                                            </div>
                                            <img
                                                className="removeBtn"
                                                src="/img/btn-remove.svg"
                                                alt="Удалить"
                                                onClick={() => onRemoveToBasket(card.id)}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className="d-flex">
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>1074р.</b>
                                </li>
                            </ul>
                            <button type="button" className="greenButton">
                                Оформить заказ <img className="removeBtn" src="/img/arrow.svg" alt="Оформить заказ" />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" src="img/empty-cart.jpg" alt="Empty" />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className="greenButton" onClick={onDrawerClose}>
                            <img src="img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

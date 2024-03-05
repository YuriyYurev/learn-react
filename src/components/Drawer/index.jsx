import style from './Drawer.module.scss'

export default function Drawer({isActive, onDrawerClose}) {
    return (
        <div className={isActive ? `${style.overlay} ${style['is-active']}` : style.overlay}>
            <div className={style.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина 
                    <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Закрыть" onClick={onDrawerClose}/>
                </h2>
                <div className={style.items}>
                    <div className="cardItem d-flex align-center">
                        <div style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }} className="cartItemImg"></div>
                        <div className="mr-20">
                            <p className="mb-5">Мужские кроссовки</p>
                            <b>1025.руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Удалить"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498р.</b>
                        </li>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>1074р.</b>
                        </li>
                    </ul>
                    <button type="button" className="greenButton">Оформить заказ <img className="removeBtn" src="/img/arrow.svg" alt="Оформить заказ"/></button>
                </div>
            </div>
        </div>
    )
}

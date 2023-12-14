import style from './Card.module.scss'

export default function Card({id, title, src, price}) {
    return (
        <div className={style.card} id={id}>
            <div className={style.favorite}>
                <img className="cu-p" height={40} width={40} src="/img/unliked.svg" alt=""/>
            </div>
            <img className={style.img} src={src} alt=""/>
            <p>{title}</p>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <button type="button" className={style.plus}>
                    <img height={11} width={11} src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}

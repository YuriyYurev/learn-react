export default function Card({id, title, src, price}) {
    return (
        <div className="card" id={id}>
            <div className="favorite">
                <img className="cu-p" height={40} width={40} src="/img/unliked.svg" alt=""/>
            </div>
            <img height={133} width={112} src={src} alt=""/>
            <p>{title}</p>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <button type="button" className="button">
                    <img height={11} width={11} src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}
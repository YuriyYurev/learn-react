export default function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img height={40} width={40} src="/img/liked.svg" alt=""/>
            </div>
            <img height={133} width={112} src="/img/sneakers/1.jpg" alt=""/>
            <p>фывфывывфы</p>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999руб.</b>
                </div>
                <button type="button" className="button">
                    <img height={11} width={11} src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}
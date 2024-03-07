import style from "./ListCards.module.scss"
import Card from "../Card";

export default function ListCards({cards}) {
    return (
        <div className={style.row}>
            {cards.map(card => {
                return (
                    <div className={style.card} key={card.id}>
                        <Card  id={card.id} title={card.title} src={card.src} price={card.price}/>
                    </div>
                );
            })}
        </div>
    )
}
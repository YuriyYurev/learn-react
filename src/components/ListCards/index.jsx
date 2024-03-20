import style from "./ListCards.module.scss";
import Card from "../Card";

export default function ListCards({ cards, onPlus, searchValue }) {
    return (
        <div className={style.row}>
            {cards
                .filter((card) => card.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((card) => {
                    return (
                        <div className={style.card} key={card.id}>
                            <Card id={card.id} title={card.title} src={card.src} price={card.price} onPlus={onPlus} />
                        </div>
                    );
                })}
        </div>
    );
}

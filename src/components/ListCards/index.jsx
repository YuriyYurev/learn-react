import style from "./ListCards.module.scss"
import Card from "../Card";

const cards = [
    {id: '0', title: 'Кросоввки nike', price: 1298, src: '/img/sneakers/1.jpg'},
    {id: '1', title: 'Кросоввки Adidas', price: 5398, src: '/img/sneakers/2.jpg'},
    {id: '3', title: 'Кросоввки Puma', price: 4298, src: '/img/sneakers/3.jpg'},
    {id: '4', title: 'Кросоввки Asics', price: 3228, src: '/img/sneakers/4.jpg'},
];

export default function ListCards() {
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
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

export default function App() {

	const cards = [
		{id: '0', title: 'Кросоввки nike', price: 1298, src: '/img/sneakers/1.jpg'},
		{id: '1', title: 'Кросоввки Adidas', price: 5398, src: '/img/sneakers/2.jpg'},
		{id: '3', title: 'Кросоввки Puma', price: 4298, src: '/img/sneakers/3.jpg'},
		{id: '4', title: 'Кросоввки Asics', price: 3228, src: '/img/sneakers/4.jpg'},
	];

	return (
		<div className="wrapper clear">
			<div className="overlay" style={{ display: 'none' }}>
				<Drawer/>
			</div>
			<Header/>
			<div className="content p-40"> 
				<div className="d-flex align-center justify-between mb-40">
					<h1 className="">Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="Поиск"/>
						<input type="text" placeholder="Поиск..."/>
					</div>
				</div>
				<div className="d-flex">
					{cards.map(card => {
						return <Card key={card.id} id={card.id} title={card.title} src={card.src} price={card.price}/>
					})}
				</div>
			</div>
		</div>
	);
}

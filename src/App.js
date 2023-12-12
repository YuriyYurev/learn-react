import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
	return (
		<div className="wrapper clear">
			<div className="overlay" style={{ display: 'none' }}>
				<div className="drawer">
					<h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Закрыть"/></h2>
					<div className="items">
						<div className="cardItem d-flex align-center">
							<div style={{ backgroundImage: "url(/img/sneakers/1.jpg)", height: 70, width: 70, marginRight: 30 }} className="cartItemimg"></div>
							<div className="mr-20">
								<p className="mb-5">Мужские кроссовки</p>
								<b>1025.руб.</b>
							</div>
							<img className="removeBtn" src="/img/btn-remove.svg" alt="Удалить"/>
						</div>
						<div className="cardItem d-flex align-center">
							<div style={{ backgroundImage: "url(/img/sneakers/1.jpg)", height: 70, width: 70, marginRight: 30 }} className="cartItemimg"></div>
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
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
		</div>
	);
}

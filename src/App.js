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

			<header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
					<img height={40} width={40} src="./img/logo.png" alt=""/>
					<div className="headerInfo">
						<h3 className="text-uppercase">React sneackers</h3>
						<p className="opacity-5">Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img height={18} width={18} src="./img/cart.svg" alt=""/>
						<span>1025.руб.</span>
						</li>
					<li>
						<img height={18} width={18} src="./img/user.svg" alt=""/>
					</li>
				</ul>
			</header> 
			<div className="content p-40"> 
				<div className="d-flex align-center justify-between mb-40">
					<h1 className="">Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="Поиск"/>
						<input type="text" placeholder="Поиск..."/>
					</div>
				</div>
				<div className="d-flex">
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
					<div className="card">
						<img height={133} width={112} src="/img/sneakers/1.jpg" alt=""/>
						<p></p>
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
					<div className="card">
						<img height={133} width={112} src="/img/sneakers/1.jpg" alt=""/>
						<p></p>
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
					<div className="card">
						<img height={133} width={112} src="/img/sneakers/1.jpg" alt=""/>
						<p></p>
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
				</div>
			</div>
		</div>
	);
}

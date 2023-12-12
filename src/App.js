export default function App() {
	return (
		<div className="wrapper clear">
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
				<h1 className="mb-40">Все кроссовки</h1>
				<div className="d-flex">
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

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

export default function App() {
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
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
		</div>
	);
}

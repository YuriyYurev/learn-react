import Header from "./components/Header";
import Drawer from "./components/Drawer";
import ListCards from "./components/ListCards";
import { useState } from "react";


export default function App() {
	const [ drawerOpened, setDrawerOpened] = useState(false);

	return (
		<div className="wrapper clear">
			<Drawer isActive={drawerOpened} onDrawerClose={() => setDrawerOpened(false)}/>
			<Header onDrawerOpened={() => setDrawerOpened(true)}/>
			<div className="content p-40"> 
				<div className="d-flex align-center justify-between mb-40">
					<h1 className="">Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="Поиск"/>
						<input type="text" placeholder="Поиск..."/>
					</div>
				</div>
				<ListCards/>
			</div>
		</div>
	);
}

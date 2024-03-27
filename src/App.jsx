import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
// import ListCards from "./components/ListCards";
import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
    const [drawerOpened, setDrawerOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);
    // const [searchValue, setSearchValue] = React.useState("");

    // const onToggleTocart = ({ id, changeActive }) => {
    //     const obj = items.find((item) => item.id === id);
    //     obj.isCart = changeActive;
    //     axios.put(`https://65e73c4053d564627a8e4edd.mockapi.io/items/${id}`, obj);
    //     setItems((prev) => prev.map((item) => (item.id === id ? obj : item)));
    // };

    const onRemoveToBasket = (id) => {
        const obj = items.find((item) => item.id === id);
        obj.isCart = false;
        axios.put(`https://65e73c4053d564627a8e4edd.mockapi.io/items/${id}`, obj);
        setItems((prev) => prev.map((item) => (item.id === id ? obj : item)));
    };

    // const onFavoriteToggle = ({ id, changeFavorite }) => {
    //     const obj = items.find((item) => item.id === id);
    //     obj.isFavorite = changeFavorite;
    //     axios.put(`https://65e73c4053d564627a8e4edd.mockapi.io/items/${id}`, obj);
    //     setItems((prev) => prev.map((item) => (item.id === id ? obj : item)));
    // };

    // const onChangeSearchInput = (event) => {
    //     setSearchValue(event.target.value);
    // };

    // React.useEffect(() => {
    //     axios.get("https://65e73c4053d564627a8e4edd.mockapi.io/items").then((response) => {
    //         setItems(response.data);
    //     });
    // }, []);

    return (
        <div className="wrapper clear">
            <React.StrictMode>
                <Drawer
                    isActive={drawerOpened}
                    cards={items}
                    onDrawerClose={() => setDrawerOpened(false)}
                    onRemoveToBasket={onRemoveToBasket}
                />
                <Header onDrawerOpened={() => setDrawerOpened(true)} />
                <div className="content p-40">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favorites" element={<Favorites />}></Route>
                    </Routes>
                </div>
            </React.StrictMode>
        </div>
    );
}

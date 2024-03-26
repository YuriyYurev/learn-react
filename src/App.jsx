import Header from "./components/Header";
import Drawer from "./components/Drawer";
import ListCards from "./components/ListCards";
import axios from "axios";
import React from "react";

export default function App() {
    const [drawerOpened, setDrawerOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [cardItems, setCardItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    const onToggleTocart = ({ id, changeActive }) => {
        const obj = {
            id,
            isCart: changeActive,
        };
        axios.put(`https://65e73c4053d564627a8e4edd.mockapi.io/items/${id}`, obj);
        setCardItems(items.map((cart) => (cart.id === obj.id ? (cart.isCart = obj.isCart) : cart)));
    };

    const onRemoveToCart = (id) => {
        // axios.delete(`https://65e73c4053d564627a8e4edd.mockapi.io/cart/${id}`);
        // setCardItems((prev) => prev.filter((cart) => cart.id !== id));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    React.useEffect(() => {
        axios.get("https://65e73c4053d564627a8e4edd.mockapi.io/items").then((response) => {
            setItems(response.data);
            // setCardItems(carts);
        });
    }, []);

    return (
        <div className="wrapper clear">
            <React.StrictMode>
                <Drawer
                    isActive={drawerOpened}
                    // cards={items}
                    onDrawerClose={() => setDrawerOpened(false)}
                    onRemoveToCart={onRemoveToCart}
                />
                <Header onDrawerOpened={() => setDrawerOpened(true)} />
                <div className="content p-40">
                    <div className="d-flex align-center justify-between mb-40">
                        <h1 className="">{searchValue ? `Поиск по: ${searchValue}` : "Все кроссовки"}</h1>
                        <div className="search-block d-flex">
                            <img src="/img/search.svg" alt="Поиск" />
                            <input
                                type="text"
                                placeholder="Поиск..."
                                value={searchValue}
                                onChange={onChangeSearchInput}
                            />
                            {searchValue && (
                                <img
                                    src="/img/btn-remove.svg"
                                    alt="Очистить поиск"
                                    className="clear cu-p"
                                    onClick={() => setSearchValue("")}
                                />
                            )}
                        </div>
                    </div>
                    <ListCards
                        cards={items}
                        onToggleTocart={onToggleTocart}
                        searchValue={searchValue}
                        onRemoveToCart={onRemoveToCart}
                    />
                </div>
            </React.StrictMode>
        </div>
    );
}

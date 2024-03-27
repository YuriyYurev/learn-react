// import ListCards from "../components/ListCards";
import React from "react";

export default function Home({searchValue, onChangeSearchInput, setSearchValue}) {
    return (
        <>
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">{searchValue ? `Поиск по: ${searchValue}` : "Все кроссовки"}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Поиск" />
                    <input type="text" placeholder="Поиск..." value={searchValue} onChange={onChangeSearchInput} />
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
            {/* <ListCards
                cards={items}
                onToggleTocart={onToggleTocart}
                searchValue={searchValue}
                onFavoriteToggle={onFavoriteToggle}
            /> */}
        </>
    );
}

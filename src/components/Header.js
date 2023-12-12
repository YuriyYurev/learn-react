export default function Header() {
    return (
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
    )
}
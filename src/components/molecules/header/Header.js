import { RiShoppingBag3Fill, MdChair, IoUmbrellaOutline, GiKnapsack } from 'react-icons/all';

function Header() {
    return (

        <div className="header">
            <div className="header__logo">
                <h2>PUFI</h2>
            </div>
            <div className="header__navicons">
                <div>
                    <MdChair size={28} />
                    <p>pufi puff</p>
                </div>
                <div>
                    <IoUmbrellaOutline size={28} />
                    <p>pufi rain</p>
                   
                </div>
                <div>
                    <RiShoppingBag3Fill size={28} />
                    <p>pufi cart</p>
                </div>
                <div>
                    <GiKnapsack size={28} />
                    <p>pufi nap</p>
                </div>
            </div>
            <div className="header__btnactions">
                <div>
                    <p>Mi cuenta</p>
                    <span className="triangle"></span>
                </div>
                <hr/>
                <div>
                    <p>Mi Compra</p>
                </div>
            </div>
        </div>
    );
}

export default Header
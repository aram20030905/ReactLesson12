import { NavLink } from "react-router-dom";
import "./navigation.css"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDecrement, actionIncrement, actionTotal } from "../../store/slices/Shop/action";
function Navigation() {
    let shop = useSelector((state) => state.shopData)
    const dispatch=useDispatch()
    const basket = useRef(null)
    const totalPrice = shop.reduce((sum, el) => sum + el.price * el.count, 0);
    const showBasket = () => {
        basket.current.classList.toggle("open")

    }
    function increment(id){
        dispatch(actionIncrement(id))
    }

    function decrement(id){
        dispatch(actionDecrement(id))
    }

    return (

        <nav className="menu">

            <NavLink to="/product">Product</NavLink>
            <NavLink to="/user">User</NavLink>
            <div>
                <button onClick={showBasket}>Add</button>
                <div className="basket" ref={basket}>
{shop.map((el)=>(
    <div key={el.id} className="shopItem">
        <button onClick={()=>increment(el.id)}>+</button>
        <p>{el.price*el.count}</p>
        <button onClick={()=>decrement(el.id)}>-</button>
        <img src={el.thumbnail}/>
    </div>
))}
<div>
    <h2>Total:{totalPrice}</h2>
</div>
                </div>
            </div>

        </nav>
    )
}

export default Navigation
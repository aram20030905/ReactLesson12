
import { useDispatch, useSelector } from "react-redux"
import { addNewProduct } from "../../store/slices/ProductData/action"
import { useEffect } from "react"
import "./product.css"
import { actionaddShop } from "../../store/slices/Shop/action"

function Product() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.productsData)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            dispatch(addNewProduct(data.products));
        };

        fetchData();
    }, []);
const handlerAdd=(product)=>{
    dispatch(actionaddShop(product))
}
    return (
        <div className="great">
            {product.map((el) => {
                return (
                    <div key={el.id} className="one">
                        <h2>{el.title}</h2>
                        <p><span>Description:</span>{el.description}</p>
                        <p><span>Category:</span>{el.category}</p>
                        <p><span>Price:</span>{el.price}</p>
                        <img src={el.thumbnail}/>
                        <button onClick={()=>handlerAdd(el)} >Add</button>
                    </div >
                )
            })}
        </div>
    )
}


export default Product
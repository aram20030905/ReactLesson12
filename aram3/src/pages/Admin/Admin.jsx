import { useEffect,  useReducer, useState } from "react";
import "./admin.css";

function Admin() {
    const initialState = {
        productData: [],
        image: ""
    };

    function reducer(state, action) {
        switch (action.type) {
            case "setImage":
                return { ...state, image: action.payload }

            case "resetImage":

                return { ...state, image: "" }

            case "setProductData":

                return { ...state, productData: action.payload }

            case "addProduct":
                return { ...state, productData: [...state.productData, action.payload] }
            case "delete":
                return {...state,productData:state.productData.filter(el=>el.id !==action.payload)}
            case "updateProduct":
                return {
                    ...state,
                    productData: state.productData.map((product)=>
                        product.id === action.payload.id ? action.payload:product
                    ),
                    currentProduct:null,
                    image:""
                }
            case "setCurrentProduct":
                return {...state, currentProduct:action.payload}

            default:
                return state;

        }

    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const [imagePreview, setImagePreview] =useState("")


    function createImage(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                dispatch({
                    type: "setImage", payload:
                        reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/productData")
            .then(response => response.json())
            .then(data => dispatch({ type: "setProductData", payload: data }))
            .catch(error => console.error("Error fetching data:", error));
    }, []);


    function send(e) {
        e.preventDefault();
        const { title, price, description } = e.target.elements;

        const obj = {
            id: new Date().getTime().toString(),
            title: title.value,
            price: price.value,
            description: description.value,
            image: state.image
        };

        fetch("http://localhost:8000/productData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(newProduct => {
                dispatch({ type: "addProduct", payload: newProduct });
                e.target.reset();
                dispatch({ type: "resetImage" });
            })
            .catch(error => console.error("Error posting data:", error));
    }
    function handleDelete(id){
        fetch(`http://localhost:8000/productData/${id}`, {
            method: "DELETE"
    })
    .then(()=>{
        dispatch({type:"delete",payload:id})
    })
    }

    function handleUpdate(id){
        const productToUpdate = state.productData.find((product)=>product.id===id)
        dispatch({type:"setCurrentProduct", payload: productToUpdate})
console.log(productToUpdate)
        setImagePreview(productToUpdate.image)
        dispatch({type: "setImage", payload:productToUpdate.image})


    }
    function updateProduct(e){
        e.preventDefault();
        const {title,price,description}=e.target.elements

        const updateProduct = {
            ...state.currentProduct,
            title: title.value,
            price: price.value,
            description:description.value,
            image: state.image || state.currentProduct.image
        }
        fetch(`http://localhost:8000/productData/${state.currentProduct.id}`, {
            method:"PUT",
            headers: {
                  "Content-Type":"application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(response => response.json())
            .then(updated => {
                dispatch({ type: "updateProduct", payload: updated });
                e.target.reset();
                setImagePreview(""); 
            })
            .catch(error => console.error("Error updating data:", error));
    }

     return (
        <div className="product">
            {state.currentProduct ? (
                <form onSubmit={updateProduct} className="admin">
                    <h2>Edit Product</h2>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter product title"
                        defaultValue={state.currentProduct.title}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter product price"
                        defaultValue={state.currentProduct.price}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter product description"
                        defaultValue={state.currentProduct.description}
                        required
                    />
                    <input onChange={createImage} type="file" name="image" />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                    <button type="submit">Update Product</button>
                </form>
            ) : (
                <form onSubmit={send} className="admin">
                    <h2>Add New Product</h2>
                    <input type="text" name="title" placeholder="Enter product title" required />
                    <input type="number" name="price" placeholder="Enter product price" required />
                    <input type="text" name="description" placeholder="Enter product description" required />
                    <input onChange={createImage} type="file" name="image" />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                    <button type="submit">Send</button>
                </form>
            )}

            <div>
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.productData.map(el => (
                            <tr key={el.id} className="data">
                                <td>{el.title}</td>
                                <td>{el.description}</td>
                                <td>{el.price}</td>
                                <td><img src={el.image} alt={el.title} /></td>
                                <td>
                                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                                    <button onClick={() => handleUpdate(el.id)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
import { Routes,Route } from "react-router-dom"
import Layout from "../Layout/Layout"
import Product from "../../pages/Product/Product"
import User from "../../pages/User/User"
function AppRouter(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="product" element={<Product/>}/>
                    <Route path="user" element={<User/>}/>
                </Route>
            </Routes>
        </div>
    )
}


export default AppRouter
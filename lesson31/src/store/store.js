import { combineReducers ,createStore } from "redux";
import ProductDataSlices from "./slices/ProductData/productDataSlices";
import shopDataSlice from "./slices/Shop/shopDataSlice";
import UserSlices from "./slices/UserData/UserDataSlices";


const store=createStore(combineReducers({
    usersData: UserSlices,
    productsData: ProductDataSlices,
    shopData:shopDataSlice,
  })
)

export default store
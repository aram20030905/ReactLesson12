const initialShop = []

const shopDataSlice = (state = initialShop, action) => {
    switch (action.type) {
        case "AddShop":
            const item = state.find((el) => el.id === action.payload.id);
            if (item) {
                return state.map((el) =>
                    el.id === action.payload.id ? { ...el, count: el.count + 1 } : el)
            }
            else {
                return [...state, { ...action.payload, count: 1 }]
            }

        case "increment":
            return state.map((el) => {
                return el.id === action.payload ? { ...el, count: el.count + 1 } : el
            })
        case "decrement":
            return state.map((el) => {

                if (el.id === action.payload) {
                    return {
                        ...el,

                        count: el.count > 0 ? el.count - 1 : el.count
                    }
                }
                return el;

            })




        default:
            return state;
    }

}

export default shopDataSlice
const initialProducts = [];

const ProductDataSlices=(state=initialProducts,action)=>{
    switch(action.type){
        case 'SET_PRODUCT':
            return  action.payload;
          default:
            return state;
        }
      };
      export default ProductDataSlices

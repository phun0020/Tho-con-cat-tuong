import M from 'materialize-css';

const  initState = { 

};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT': {
            M.toast({
                html: `Added new item: ${ action.product.itemCode }`,
                classes: 'green lighten-1'
            });
            return state;
        }
        case 'CREATE_PRODUCT_ERROR': {
            M.toast({
                html: `Error while adding new product, see console for detail`,
                classes: 'red lighten-1'
            });
            console.log(`ERROR: ${ action.error }`)
            return state;
        }
        case 'DELETE_PRODUCT': {
            console.log(action.product);
            M.toast({
                html: 'item deleted',
                classes: 'red lighten-1'
            });
            return state;
        }
        case 'DELETE_PRODUCT_ERROR': {
            
            return state;
        }
        default: {
            return state;
        }
    }
}

export default productReducer;
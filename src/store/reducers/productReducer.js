import M from 'materialize-css';

const  initState = { };

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT': {
            M.toast({
                html: `Added new item: ${ action.newDoc.itemCode }`,
                classes: 'gradient-45deg-green-teal'
            });
            return state;
        }
        case 'CREATE_PRODUCT_ERROR': {
            M.toast({
                html: `Error while adding new product, see console for detail`,
                classes: 'gradient-45deg-purple-deep-orange'
            });
            console.log(`ERROR: ${ action.error }`)
            return state;
        }
        case 'DELETE_PRODUCT': {
            M.toast({
                html: `Deleted item ${ action.product.itemCode }`,
                classes: 'gradient-45deg-amber-amber'
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
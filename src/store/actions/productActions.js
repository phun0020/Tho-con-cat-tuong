export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        if(product.items) dispatch({ type: 'CREATE_PRODUCT_ERROR', error: 'Items are empty' })
        const fireStore = getFirestore();

        // for each item, add a record to products collection
        product.items.map(item => {
            const { items, ...newProduct } = product; 

            fireStore.collection('products').add({
                ...newProduct,
                ...item,
                createdBy: 'Tam Phung',
                createdDate: new Date(),
            }).then(() => {
                dispatch({
                    type: 'CREATE_PRODUCT',
                    product
                });
            }).catch(error => {
                dispatch({
                    type: 'CREATE_PRODUCT_ERROR',
                    error
                });
            })
            
            return null;
        });
    }
}

export const removeProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore();
        console.log(product);
        fireStore.collection('products').doc(product.id).delete()
        .then(() => {
            dispatch({
                type: 'DELETE_PRODUCT',
                product
            });
        }).catch(error => {
            dispatch({
                type: 'DELETE_PRODUCT_ERROR',
                error
            });
        });

        return null;
    };
}
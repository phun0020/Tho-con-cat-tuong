export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        if(!product.items) {
            dispatch({ type: 'CREATE_PRODUCT_ERROR', error: 'Items are empty' });
            return null;
        }

        const fireStore = getFirestore();
        // for each item, add a record to products collection
        product.items.map(item => {
            // https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
            // keep forgeting how to remove item in object using spread operator
            // More detail: CreateProduct.js

            const { items, ...newProduct } = product;
            const { id, ...newItem } = item;
            const newDoc = {
                ...newProduct,
                ...newItem,
                createdBy: 'Tam Phung',
                createdDate: new Date(),
            }

            fireStore.collection('products')
            .add(newDoc)
            .then(() => {
                dispatch({
                    type: 'CREATE_PRODUCT',
                    newDoc
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
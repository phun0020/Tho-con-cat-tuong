import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProductDetail = (props) => {
    const { product, auth } = props;
    if(!auth.uid) return <Redirect to='/signin' />
     
    if(product) {
        return (
            <div className="container section product-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">ITEM: { product.itemCode }</span>
                        <p>Description: { product.description }</p>
                    </div>
                </div>
                
            </div>
        );
    } else {
        return (
            <div className="center">
                Loading...
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const products = state.firestore.data.products;
    return {
        product: products ? { ...products[id], id } : null,
        auth: state.firebase.auth
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'products' }
    ])
)(ProductDetail);
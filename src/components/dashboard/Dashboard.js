import React, { Component } from 'react';
import ProductList from '../products/ProductList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    state = { currentList: null, query: '' };

    // search bar's handle change
    handleSearchChange = e => {
        const query = e.target.value;
        if(query && query.length >= 1 && this.props.products) {
            this.setState({ query });
            let newList;

            newList = this.props.products.filter(product => {
                const lcProduct = product['Item Code'].toLowerCase();
                const lcQuery = query.toLowerCase();

                return lcProduct.includes(lcQuery);
            });

            this.setState({ currentList: newList, query });
        } else {
            this.setState({ currentList: null, query: '' });
        }
    }

    render() {
        const { products, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        if(products) {
            let itemCodeArr = [];
            products.map(product => itemCodeArr.push({ label: product['Item Code'] }));
            
            return (
                <div className="dashboard">
                    {/* Search bar */}
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">search</i>
                                <input type="text" id="searchBar" name="searchBar" 
                                autoComplete="off" 
                                onChange={ e => this.handleSearchChange(e) }
                                placeholder="Item Code" />
                                </div> 
                            </div>
                    </div>

                    {/* List of products */}
                    <div className="row">
                        <div className="col s12">
                            <ProductList products = { this.state.currentList !== null ? this.state.currentList : products }/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col s12">
                        Loading...
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'products' }
    ])
)(Dashboard)
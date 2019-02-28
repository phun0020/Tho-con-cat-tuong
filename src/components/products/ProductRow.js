import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { removeProduct } from '../../store/actions/productActions';
import { connect } from 'react-redux';

class ProductRow extends Component {
    handleRemoveClick = (product) => {
        this.props.removeProduct(product);
    }

    render() {
        const { product } = this.props;
        const total = (product.Quantity && product['Unit Price']) ? product.Quantity * product['Unit Price'] : "N/A";

        return (
        <tr>
                <td>{ product.PO }</td>
                <td>{ product.Date ? product.Date.seconds : "1/1/1753" }</td>
                <td>{ product['Item Code'] }</td>
                <td>{ product.Type }</td>
                <td>{ product.Description }</td>
                <td>{ product.Quantity }</td>
                <td>{ product['Unit Price'] }</td>
                <td>{ total }</td>
                <td>{ product.Discount }</td>
                <td>0</td>
                <td>{ product.Supplier }</td>
                <td>{ product['Transportation fee'] }</td>
                <td>{ product['Impost'] }</td>
                <td>{ product.VAT }</td>
                <td>{ product['Received Date'] ? product['Received Date'].seconds : "1/1/1753" }</td>
                <td>{ product['To Khai'] }</td>
                <td>{ product.Status }</td>
                <td>
                    <Link to={ '/product/' + product.id } className='waves-effect waves-light btn-small light-blue darken-1'><i className="material-icons">details</i></Link>
                    <button 
                    className='waves-effect waves-light btn-small red darken-1'
                    onClick={ () => this.handleRemoveClick(product) }
                    ><i className="material-icons">delete_forever</i></button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (product) => dispatch(removeProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductRow);
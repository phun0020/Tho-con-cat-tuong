import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { removeProduct } from '../../store/actions/productActions';
import { connect } from 'react-redux';
import '../../index.css';

class ProductRow extends Component {
    handleRemoveClick = (product) => {
        this.props.removeProduct(product);
    }

    timeStampToShortDate = (date) => {
        return date.constructor.name === 'Timestamp' ? date.toDate().toLocaleDateString() : date;
    }

    render() {
        
        const { product } = this.props;
        const total = (product.quantity && product.unitPrice) ? product.quantity * product.unitPrice : "N/A";
        const totalAmount = total - product.discount;

        return (
        <tr>
                <td>{ product.po }</td>
                <td>{ this.timeStampToShortDate(product.date) }</td>
                <td>{ product.itemCode }</td>
                <td>{ product.type }</td>
                <td>{ product.description }</td>
                <td>{ product.quantity }</td>
                <td>{ product.unitPrice }</td>
                <td>{ !isNaN(total) ? total : "N/A" }</td>
                <td>{ product.discount ? product.discount : 0 }</td>
                <td>{ !isNaN(totalAmount) ? totalAmount : "N/A" }</td>
                <td>{ product.supplier }</td>
                <td>{ product.transportationFee }</td>
                <td>{ product.impost }</td>
                <td>{ product.vat }</td>
                <td>{ this.timeStampToShortDate(product.receivedDate) }</td>
                <td>{ product.toKhai }</td>
                <td>{ product.status }</td>
                <td>
                    <Link to={ '/product/' + product.id } className='waves-effect waves-light btn-small gradient-45deg-light-blue-cyan'><i className="material-icons">details</i></Link>
                    <button 
                    className='waves-effect waves-light btn-small gradient-45deg-purple-deep-orange'
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
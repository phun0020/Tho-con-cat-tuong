import React from 'react';
import ProductRow from './ProductRow';

const ProductList = ({products}) => {
    if(!products) return (<div>Loading...</div>);

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>PO</th>
                        <th>Date</th>
                        <th>Item Code</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                        <th>Discount</th>
                        <th>Total Amount</th>
                        <th>Supplier</th>
                        <th>Phí vận chuyển</th>
                        <th>Thuế NK</th>
                        <th>Thuế VAT</th>
                        <th>Received Date</th>
                        <th>Tờ khai</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(product => {
                            return (
                                <ProductRow product = { product } key = { product.id }/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
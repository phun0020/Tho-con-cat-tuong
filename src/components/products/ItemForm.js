import React, { Component } from 'react';
import M from 'materialize-css';

class ItemForm extends Component {
    
    state = {
        subTotal: 0,
        total: 0
    }

    handleChange= (e) => {
        this.props.handleChange(e, this.props.item.id).then(() => {
            this.updateTotal();
        });
    }

    updateTotal = () => {
        this.setState({
            subTotal: parseFloat(this.props.item.quantity) * parseFloat(this.props.item.unitPrice),
            total: parseFloat(this.props.item.quantity) * parseFloat(this.props.item.unitPrice) - parseFloat(this.props.item.discount)
        })
    }

    componentDidUpdate() {
        let elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'left',
        });
    }

    render () {
        return (
            <div className="col s4">
                <div className="card-panel item-form">

                    {/* floating action buttons */}
                    <div className="row">
                        <div className="fixed-action-btn direction-left right" style={{ position: 'relative', right: 0, bottom: 0 }}>
                            <button type="button" className="btn-floating btn-large blue">
                                <i className="large material-icons">mode_edit</i>
                            </button>
                            <ul>
                                <li><button type="button" className="btn-floating red darken-1" onClick={ (e) => this.props.removeItem(e, this.props.item.id) }><i className="material-icons">delete</i></button></li>
                                <li><button type="button" className="btn-floating green" onClick={ (e) => this.props.clearInputFields(e, this.props.item.id) }><i className="material-icons">refresh</i></button></li>
                            </ul>
                        </div>
                    </div>

                    {/* input fields */}
                    <div className="row">
                        <div className="input-field col s12 m4">
                            <label htmlFor="itemCode">Item Code</label>
                            <input type="text" id="itemCode" onChange={ this.handleChange } value={ this.props.item.itemCode } />
                        </div>
                        <div className="input-field col s12 m7">
                            <label htmlFor="type">Type</label>
                            <input type="text" id="type" onChange={ this.handleChange } value={ this.props.item.type } />
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" onChange={ this.handleChange } value={ this.props.item.description } />
                        </div>
                        <div className="input-field col s12 m4">
                            <label htmlFor="quantity" className="active">Quantity</label>
                            <input type="number" id="quantity" onChange={ this.handleChange } value={ this.props.item.quantity } />
                        </div>
                        <div className="input-field col s12 m4">
                            <label htmlFor="unitPrice" className="active">Unit Price</label>
                            <input type="number" id="unitPrice" onChange={ this.handleChange } value={ this.props.item.unitPrice } />
                        </div>
                        <div className="input-field col s12 m4">
                            <label htmlFor="subTotal" className="active">Sub Total</label>
                            <input disabled type="text" id="subTotal" value={ this.state.subTotal } />
                        </div>
                        <div className="input-field col s12 m4">
                            <label htmlFor="discount" className="active">Discount</label>
                            <input type="number" id="discount" onChange={ this.handleChange } value={ this.props.item.discount } />
                        </div>
                        <div className="input-field col s12 offset-m4 m4">
                            <label htmlFor="total" className="active">Total</label>
                            <input disabled type="text" id="total" value={ this.state.total } />
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="supplier">Supplier</label>
                            <input type="text" id="supplier" onChange={ this.handleChange } value={ this.props.item.supplier } />
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="term">Term</label>
                            <input type="text" id="term" onChange={ this.handleChange } value={ this.props.item.term } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemForm;
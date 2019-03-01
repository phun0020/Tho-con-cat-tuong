import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../store/actions/productActions';
import ItemForm from './ItemForm';
import { guid } from '../../service/GUID';
import M from 'materialize-css';
import { Redirect } from 'react-router-dom';

class CreateProduct extends Component {
  initState = {
    itemCode: 'GH-111',
    description: 'description for gh-111',
    type: 'chrome',
    quantity: 25,
    unitPrice: 10,
    discount: 10,
    supplier: 'microhard',
    term: 'return in 60 days',
  }

  // initState = {
  //   itemCode: '',
  //   description: '',
  //   type: '',
  //   quantity: 0,
  //   unitPrice: 0,
  //   discount: 0,
  //   supplier: '',
  //   term: ''
  // }
  
  // this only add a temporary id to this product
  // I don't have any unique prop to distinguish each item
  // will remove & replace with firestore id
  generateNewItem = () => Object.assign({ id: guid() }, this.initState)

  state = {
    po: 'PO123',
    date: new Date(),
    transportationFee: 100,
    impost: 500,
    vat: 50,
    receivedDate: new Date(),
    toKhai: 'TK123',
    status: '0',
    items: [this.generateNewItem()],
  };

  clearInputFields = (e, itemId) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.map(item => {
        return item.id !== itemId ? item : Object.assign(item, this.initState);
      })
    })
  }

  addNewItem = (e) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(this.generateNewItem()),
    });
  }

  removeItem = (e, itemId) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  handleChange = (e, itemId = null) => {
     let target = e.target;
     let value = target.value


    if(itemId) {
      return new Promise((resolve, reject) => {
        this.setState({
          items: this.state.items.map(item => {
            return item.id !== itemId ? item : {...item, [target.id]: value };
          })
        }, () => resolve(this))
      })
    } else {
      this.setState({
        [target.id] : value
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let isValid = Object.values(this.state).every(prop => prop !== null);
    isValid && this.props.createProduct(this.state);
  }

  componentDidMount() {
    let elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
      defaultDate: new Date(),
      setDefaultDate: false
    });
  }

  render() {
    const { auth } = this.props
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container create-product-form">
        <form onSubmit={ this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3">Create New Product</h5>
          <div className="row">
            <div className="input-field col s12 m4">
              <i className="material-icons prefix">notes</i>
              <label htmlFor="po">PO</label>
              <input type="text" id="po" onChange={ this.handleChange } value={ this.state.po } />
            </div>

            <div className="input-field col s12 m4">
              <i className="material-icons prefix">file_copy</i>
              <label htmlFor="toKhai">Tờ Khai</label>
              <input type="text" id="toKhai" onChange={ this.handleChange } value={ this.state.toKhai } />
            </div>

            <div className="input-field col s12 m4">
              <i className="material-icons prefix">bubble_chart</i>
              <label htmlFor="status">Status</label>
              <input type="text" id="status" onChange={ this.handleChange } value={ this.state.status } />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m4">
              <i className="material-icons prefix">event</i>
              <label htmlFor="date">Date</label>
              <input type="text" id="date" className="datepicker" onChange={ this.handleChange } value={ this.state.date } />
            </div>

            <div className="input-field col s12 m4">
              <i className="material-icons prefix">today</i>
              <label htmlFor="receivedDate">Received Date</label>
              <input type="text" id="receivedDate" className="datepicker" onChange={ this.handleChange } value={ this.state.receivedDate } />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m4">
              <i className="material-icons prefix">local_shipping</i>
              <label htmlFor="transportationFee">Transportation Fee</label>
              <input type="text" id="transportationFee" onChange={ this.handleChange } value={ this.state.transportationFee } />
            </div>

            <div className="input-field col s12 m4">
              <i className="material-icons prefix">directions_boat</i>
              <label htmlFor="impost">Impost</label>
              <input type="text" id="impost" onChange={ this.handleChange } value={ this.state.impost } />
            </div>

            <div className="input-field col s12 m4">
              <i className="material-icons prefix">monetization_on</i>
              <label htmlFor="vat">VAT</label>
              <input type="text" id="vat" onChange={ this.handleChange } value={ this.state.vat } />
            </div>
          </div>
          
          <div className="row">
          {
            this.state.items.map(item => {
              return(
                <ItemForm item={ item } 
                handleChange={ this.handleChange } 
                removeItem={ this.removeItem } 
                clearInputFields={ this.clearInputFields }
                key={ item.id }/>
              )
            })
          }
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth 0">Create</button>
            <button className="btn blue lighten-1 z-depth 0" onClick={ this.addNewItem }>Add item</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      createProduct: (product) => dispatch(createProduct(product))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)

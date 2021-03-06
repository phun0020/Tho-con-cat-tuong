import React, { Component } from 'react';
import '../../index.css';

export default class Footer extends Component {
  

  render() {
    return (
        <footer className="page-footer gradient-45deg-indigo-purple">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Drop by and say hello</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Linkedin</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                </ul>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © { new Date().getFullYear() } Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
  }
}

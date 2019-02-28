import React, { Component } from 'react';
import '../../index.css';

export default class Footer extends Component {
  

  render() {
    return (
        <footer class="page-footer gradient-45deg-indigo-purple">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Drop by and say hello</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Linkedin</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Github</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                </ul>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © { new Date().getFullYear() } Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
  }
}

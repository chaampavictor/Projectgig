import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
export default class Footer extends Component {

  render() {
    return (

      <footer id="separate" className="page-footer default_color scrollspy">
          <div className="container">
              <div className="row">

                  <div className="col l3 s12">

                      <ul>
                          <li><a className="white-text"  href="/" className={` link`} id="footer-home" style={{ color: '#FFF' }}>Home</a></li>

                      </ul>
                      <ul>
                          <li><a className="white-text"  href="/terms" className={`${this.terms} link`} style={{ color: '#FFF' }} >Terms and Conditions</a></li>

                      </ul>
                      <ul>
                          <li><a className="white-text" href="/privacy" className={`${this.privacy} link`} style={{ color: '#FFF' }} >Privacy policy</a></li>

                      </ul>
                  </div>
                  

                     
                              <a className="white-text" href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-twitter-square white-text"></i>
                              </a>
                          
                              <a className="white-text" href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-facebook-square white-text"></i> 
                              </a>
                          
                              <a className="white-text" href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-linkedin-square white-text"></i> 
                             </a>

                             <a className="white-text" href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-instagram-square white-text"></i>
                              </a>
                          
              </div>
          </div>
      </footer>
    )
  }
}

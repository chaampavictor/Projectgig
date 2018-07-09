import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
export default class Footer extends Component {

  render() {
    return (

      <footer id="separate" className="page-footer">
          <div className="container">
              <div className="row center">

                  <div className="col l3 s12">

                      <ul>
                          <li><a  href="/" className={` link`} id="footer-home">Home</a></li>

                      </ul>
                      <ul>
                          <li><a href="/terms" className={`${this.terms} link`} >Terms and Conditions</a></li>

                      </ul>
                      <ul>
                          <li><a href="/privacy" className={`${this.privacy} link`} >Privacy policy</a></li>

                      </ul>
                  </div>
                              <a href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-twitter-square footer-icon"></i>
                              </a>
                              <a href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-facebook-square footer-icon" ></i>
                              </a>
                              <a href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-linkedin-square footer-icon"></i>
                             </a>
                             <a href="/" style={{ marginRight: '15px' }}>
                                  <i className="small fa fa-instagram-square footer-icon"></i>
                              </a>
              </div>
          </div>
      </footer>
    )
  }
}

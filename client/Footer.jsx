import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
export default class Footer extends Component {

  render() {
    return (

      <footer id="separate" className="page-footer default_color scrollspy">
          <div className="container">
              <div className="row">

                  <div className="col l3 s12">
                      <h5 className="white-text">projectGIg</h5>
                      <ul>
                          <li><a className="white-text"  href="/" className={` link`} id="footer-home">Home</a></li>

                      </ul>
                  </div>
                  <div className="col l3 s12">
                      <h5 className="white-text">Social</h5>
                      <ul>
                          <li>
                              <a className="white-text" href="/">
                                  <i className="small fa fa-twiiter-square white-text"></i> Twitter
                              </a>
                          </li>
                          <li>
                              <a className="white-text" href="/">
                                  <i className="small fa fa-facebook-square white-text"></i> Facebook
                              </a>
                          </li>
                          <li>
                              <a className="white-text" href="/">
                                  <i className="small fa fa-intagram-square white-text"></i>Instagram
                              </a>
                          </li>
                          <li>
                              <a className="white-text" href="/">
                                  <i className="small fa fa-snapchat-square white-text"></i> Snapchat
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}

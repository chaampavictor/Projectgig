import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    return (

      <footer id="separate" className="page-footer default_color scrollspy">
          <div className="container">
              <div className="row">
                  <div className="col l6 s12">
                      <form className="col s12" action="contact.php" method="post">
                          <div className="row">
                              <div className="input-field col s6">
                                  <i className="mdi-action-account-circle prefix white-text"></i>
                                  <input id="icon_prefix" name="name" type="text" className="validate white-text"></input>
                                  <label htmlFor="icon_prefix" className="white-text">First Name</label>
                              </div>
                              <div className="input-field col s6">
                                  <i className="mdi-communication-email prefix white-text"></i>
                                  <input id="icon_email" name="email" type="email" className="validate white-text"></input>
                                  <label htmlFor="icon_email" className="white-text">Email-id</label>
                              </div>
                              <div className="input-field col s12">
                                  <i className="mdi-editor-mode-edit prefix white-text"></i>
                                  <textarea id="icon_prefix2" name="message" className="materialize-textarea white-text"></textarea>
                                  <label htmlFor="icon_prefix2" className="white-text">Message</label>
                              </div>
                              <div className="col offset-s7 s5">
                                  <button className="btn waves-effect waves-light red darken-1" type="submit">Submit
                                      <i className="mdi-content-send right white-text"></i>
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div className="col l3 s12">
                      <h5 className="white-text">projectGIg</h5>
                      <ul>
                          <li><a className="white-text" href="/">Home</a></li>
                          <li><a className="white-text" href="/">Blog</a></li>
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

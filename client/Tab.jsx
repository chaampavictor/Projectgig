import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class Tab extends Component {

  render() {

    $(document).ready(function() {
      $('.tabs').tabs();
    });
    return (

      <div className="row">
        <div className="col s12 tab ">
          <ul className="tabs tab-buttons">
            <li className="tab col s3">
              <a href="#test1" className="">About Us</a>
            </li>
            <li className="tab col s3">
              <a href="#test2">aim</a>
            </li>
            <li className="tab col s3">
              <a href="#test3">what we do</a>
            </li>

          </ul>
        </div>

        <div id="test1" className="col s12">
          <div className="row">
            <div className="col s12 m7 l6">
              <div className="card">
                <div className="card-content">
                  <p>projectGIg is a web based application that provides people with a platform were they can easily search for accomodation that suits their needs. think of us as the google of accomodation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="test2" className="col s12">

          <div className="row">
            <div className="col s12 m7 l6">
              <div className="card">
                <div className="card-content">
                  <p>To provide the best accomodation search services possible.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="test3" className="col s12">
          <div className="row">
            <div className="col s12 m7 l6">
              <div className="card">
                <div className="card-content">
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
// testing

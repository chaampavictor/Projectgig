import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from './Footer';
import Banner from './Banner';


class Landing extends React.Component {
  render() {

    $(document).ready(function() {
      $('.carousel').carousel();
    });

    return (

      <div>

              <Banner/>

        <div id="intro" className="section scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h2 className="center header text_h2">With over 1000 <span className="span_h2">
                    listings </span>,5000 <span className="span_h2">
                    unique visitors </span>
                   per month.</h2>
              </div>
              <div className="col s12 m4 l4">
                <div className="center promo promo-example">
                  <i className="mdi-image-flash-on"></i>
                  <h5 className="promo-caption">Realtime Search Experience</h5>
                  <p className="light center">Search for accomodation and get results in the quickest time possible.</p>
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="center promo promo-example">
                  <i className="mdi-social-group"></i>
                  <h5 className="promo-caption">Easy User Experience</h5>
                  <p className="light center">your dream accomodation is just a click away</p>
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="center promo promo-example">
                  <i className="mdi-hardware-desktop-windows"></i>
                  <h5 className="promo-caption">Fully responsive</h5>
                  <p className="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

<hr className="hr-style"/>
        {/* Testimonials start here */}

        <div className="container">
          <h2 className="header text_b">Testimonials</h2>
          <div className="row">
            <div className="col sm12 m4 l4 ">
              <div className="card testimony-card">
                <div className="card-image waves-effect waves-block waves-light testimony-card">
                  <img className="activator" src="assets/bale.jpeg"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Project Title
                    <i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card testimony-card">
                <div className="card-image waves-effect waves-block waves-light testimony-card">
                  <img className="activator" src="assets/bane.jpeg"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Project Title
                    <i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card testimony-card">
                <div className="card-image waves-effect waves-block waves-light testimony-card">
                  <img className="activator" src="assets/bane.jpeg"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Project Title
                    <i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>

    );
  }
}
export default Landing;

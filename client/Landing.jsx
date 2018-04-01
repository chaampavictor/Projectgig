import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from './Footer';
import Banner from './Banner';
import Navbar from './Navbar';

class Landing extends React.Component {
  render() {

    $(document).ready(function() {
      $('.carousel').carousel();
    });

    return (

      <div>
      <Navbar/>
              <Banner/>

        <div id="intro" class="section scrollspy">
          <div class="container">
            <div class="row">
              <div class="col s12">
                <h2 class="center header text_h2">With over 1000 <span class="span_h2">
                    listings </span>,5000 <span class="span_h2">
                    unique visitors </span>
                   per month.</h2>
              </div>
              <div class="col s12 m4 l4">
                <div class="center promo promo-example">
                  <i class="mdi-image-flash-on"></i>
                  <h5 class="promo-caption">Realtime Search Experience</h5>
                  <p class="light center">Search for accomodation and get results in the quickest time possible.</p>
                </div>
              </div>
              <div class="col s12 m4 l4">
                <div class="center promo promo-example">
                  <i class="mdi-social-group"></i>
                  <h5 class="promo-caption">Easy User Experience</h5>
                  <p class="light center">your dream accomodation is just a click away</p>
                </div>
              </div>
              <div class="col s12 m4 l4">
                <div class="center promo promo-example">
                  <i class="mdi-hardware-desktop-windows"></i>
                  <h5 class="promo-caption">Fully responsive</h5>
                  <p class="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials start here */}

        <div class="container">
          <h2 class="header text_b">Testimonials</h2>
          <div class="row">
            <div class="col sm12 m4 l4">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="assets/bale.jpeg"></img>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Project Title
                    <i class="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                </div>
              </div>
            </div>
            <div class="col s12 m4 l4">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="assets/bane.jpeg"></img>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Project Title
                    <i class="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                </div>
              </div>
            </div>
            <div class="col s12 m4 l4">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="assets/arrow.jpeg"></img>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Project Title
                    <i class="mdi-navigation-more-vert right"></i>
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

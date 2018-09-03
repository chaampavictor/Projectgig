import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from './Footer';
import Banner from './Banner';
import Navbar from './Navbar';



class Landing extends React.Component {


  componentDidMount() {
    $(document).ready(function() {
      $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
    });
  }


  render() {
    return (
      <div>
        <Navbar/>
              <Banner/>
        <div id="intro" className="section scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h2 className="center header text_h2">Find the best <span className="span_h2">student
                  accomodation </span>that suits your <span className="span_h2">
                  needs </span>
                  from over a thousand listed properties</h2>
              </div>
              <div className="col s12 m4 l4">
                <div className="center promo promo-example">
                <img src="/assets/images98.png" className="center-block" />
                  <h5 className="promo-caption">Realtime Search Experience</h5>
                  <p className="light center">Search for accomodation and get results in the quickest time possible.</p>
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="center promo promo-example">
                  <img src="/assets/kat.png" className="center-block" />
                  <h5 className="promo-caption">Easy User Experience</h5>
                  <p className="light center">your dream accomodation is just a click away</p>
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="center promo promo-example">
                  <img src="/assets/index12345.png" className="center-block" />
                  <h5 className="promo-caption">Fully responsive</h5>
                  <p className="light center">Navigate the site on a device thats covinient for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials start here */}
        <div className="testimony">
        <div className="container">
          <h5 className="header text_b">What our users to say...</h5>
          <div className="row">
            <div className="carousel carousel-slider center">
              <div className="carousel-item white-text" href="#one!">
                <h4 className="white-text"><i className="fa fa-quote-left banner-fa"/>
                This website has really been helpful to me,
                they are life savers.
                <i className="fa fa-quote-right banner-fa"/>
              </h4>
                <br/>
                <h5>Hanziba Malambo</h5>
                <h5>student, University of Zambia</h5>
              </div>
              <div className="carousel-item white-text" href="#one!">
                <h4 className="white-text"><i className="fa fa-quote-left banner-fa"/>
                I can now easily find student tenants at my own convinience
                and i don't have to spend much money on advertisement.
                <i className="fa fa-quote-right banner-fa"/>
              </h4>
                <br/>
                <h5> Sophia Chisakasaka</h5>
                <h5>landlord, Chongwe</h5>
              </div>
              <div className="carousel-item white-text" href="#one!">
                <h4 className="white-text"><i className="fa fa-quote-left banner-fa"/>
                findng student accomodation has been a challenge for a long time..
                this platform helped me and my friends find emergency accomodation
                after we were evicted
                <i className="fa fa-quote-right banner-fa"/>
              </h4>
                <br/>
                <h5>Cholwe Malama Malilwe</h5>
                <h5>student, Mulungushi Univeristy</h5>
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

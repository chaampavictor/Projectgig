import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from './Footer';
import Banner from './Banner';


class Landing extends React.Component {
  render() {


    return (

      <div>

              <Banner/>

        <div id="intro" className="section scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h2 className="center header text_h2">Find the  <span className="span_h2">
                  accomodation </span>,that suits your <span className="span_h2">
                  needs </span>
                  from over a thousand listed properties</h2>
              </div>
              <div className="col s12 m4 l4">
                <div className="center promo promo-example">
                <img src="/assets/imagestb.png" className="center-block" />
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

            <div className="col s12 m7 l6">

                <div className="card horizontal">
                  <div className="card-stacked text_b">

                      <p>"I am a very simple card. I am good at containing small bits of information...."</p>
                      <h5>John Doe</h5>
                      <h6>student, dizmo university</h6>

                </div>
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

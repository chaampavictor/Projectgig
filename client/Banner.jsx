import React, {Component} from 'react';



export default class Banner extends Component {

  render() {


    return (
      <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <div className="col l12 s12">





              <form className="example">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>


            </div>
          </div>
      </div>



    )
  }
}

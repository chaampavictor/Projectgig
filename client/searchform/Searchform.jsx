import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class Searchform extends Component {

  constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: []
        }
    }

    onChange(e) {
        this.setState({searchText: e.target.value});
    }

    getResults() {
        calltodb(searchText).then(e => {
            this.setState({searchResults: e.value})
        });
    }

handleInputChange = e => {
}

  render() {
    return (
    <div>
      <div className="container">
        <div className="col l12 s12">
          <form className="example" action='/searchresults'>
            <input id="input-field" name='n'  placeholder="Search for accomodation/location...."   ref={input => this.search = input}   onChange={this.handleInputChange} />
              <p>{this.state.query}</p>
              <button type="submit"><i className="fa fa-search"></i></button>
          </form>
  <a href="/listedproperty" className={`${this.listedproperty} link`}><button id="banner-links"><h5>Listed Properties <i className="fa fa-home banner-fa"></i> </h5></button></a>

  {Meteor.userId() ?
  <>
  <a href="/property" className={`${this.property} link`}><button id="banner-links"><h5>Add Property <i className="fa fa-plus banner-fa"></i> </h5></button></a>
  </>
  :
  <>
  <a href="/registration" className={`${this.registration} link`}><button id="banner-links"><h5>Add Property <i className="fa fa-plus banner-fa"></i> </h5></button></a>
  </>
   }
    </div>
  </div>
</div>


    )
  }
}

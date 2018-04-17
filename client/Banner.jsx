import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import Navbar from './Navbar';
export default class Banner extends Component {

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
    // const name = this.props.searchBoxName || undefined
    return (
      <div className="section no-pad-bot" id="index-banner">
        <Navbar/>
          <div className="container">
            <div className="col l12 s12">

            {/* {{> search}} */}

            <form className="example">
               <input className="search-input" id="input-field"   placeholder="Search for accomodation..."   ref={input => this.search = input}   onChange={this.handleInputChange} />
               <p>{this.state.query}</p>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>

            </div>

          </div>
        </div>


    )
  }
}

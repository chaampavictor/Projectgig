import React, {Component} from 'react';



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


  render() {


    return (
      <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <div className="col l12 s12">
              

            <form>
               <input   placeholder="Search for..."   ref={input => this.search = input}   onChange={this.handleInputChange} />
               <p>{this.state.query}</p>
            </form>

            </div>
          </div>
      </div>



    )
  }
}

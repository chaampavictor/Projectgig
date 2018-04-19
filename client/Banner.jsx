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
    render() {
      // const name = this.props.searchBoxName || undefined 
     return (
      <div className="section" id="index-banner">
          <Navbar/>
        <div className="container">
          <div className="col l12 s12">
            <form className="example">
              <input type="text" className="search-input" placeholder="Search.." name="search"></input>
              <button type="submit">
                <i className="fa fa-search"/>
              </button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}
{/* <template name="search"> 
<form id="search">
<input type="text" id="searchValue" placeholder="Enter search terms here."/>
<button>Search</button>
</form>
<hr/>
<h1>Messages</h1>
<ol>
{{#each messages}}
  <li>{{value}}</li>
{{/each}}
</ol>

</template> */}
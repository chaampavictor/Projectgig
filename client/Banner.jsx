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
    // const name = this.props.searchBoxName || undefined
    return (
      <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <div className="col l12 s12">
           
            {/* {{> search}} */}

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
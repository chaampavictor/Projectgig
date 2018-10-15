import React, {Component} from 'react';

export default class Modal extends Component {

  render() {
    $(document).ready(function() {
      $('#modaldash').modal();
    });
    return (
      <div>
      <div id="modaldash" className="modal">
        <div className="modal-content">
          <h4 className="modal-title">{this.props.title}</h4>
          <div className="row">
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

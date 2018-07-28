import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {UserFiles} from '../lib/collections';
import { Session } from 'meteor/session'
// import IndividualFile from './FileIndividualFile.js';

// const debug = require('debug')('demo:file');

  class FileUpload extends Component {
    constructor(props) {
      super(props);

      this.state = {
        uploading: [],
        progress: 0,
        inProgress: false
      };

      this.uploadIt = this.uploadIt.bind(this);
    }

    showImages(){
      const mFiles = this.props.files;
      console.log("files:" + mFiles);
      return mFiles.map((file) => {
          return (
          <div key ={file._id}>
              <p>{file.name}</p>
              <img src={file.path}></img>
          </div>
          )
      }
  );
  }

    uploadIt(e) {
      e.preventDefault();

      let self = this;

      if (e.currentTarget.files && e.currentTarget.files[0]) {
        // We upload only one file, in case
        // there was multiple files selected
        var file = e.currentTarget.files[0];
              console.log(file);

        if (file) {
          let uploadInstance = UserFiles.insert({
            file: file,
            // fileName: this.props.fileName,
            meta: {
              locator: self.props.fileLocator,
              // userId: Meteor.userId() // Optional, used to check on server for file tampering
            },
            streams: 'dynamic',
            chunkSize: 'dynamic',
            allowWebWorkers: true // If you see issues with uploads, change this to false
          }, false)

          self.setState({
            uploading: uploadInstance, // Keep track of this instance to use below
            inProgress: true // Show the progress bar now
          });

          // These are the event functions, don't need most of them, it shows where we are in the process
          uploadInstance.on('start', function () {
            console.log('Starting');
          })

          uploadInstance.on('end', function (error, fileObj) {
            console.log('On end File Object: ', fileObj);
          })

          uploadInstance.on('uploaded', function (error, fileObj) {
            console.log('uploaded: ', fileObj);
            Session.set({
              imageId: fileObj._id,
              imageType: fileObj.ext
            })

            // Remove the filename from the upload box
            self.refs['fileinput'].value = '';

            // Reset our state for the next file
            self.setState({
              uploading: [],
              progress: 0,
              inProgress: false
            });
          })

          uploadInstance.on('error', function (error, fileObj) {
            console.log('Error during upload: ' + error)
          });

          uploadInstance.on('progress', function (progress, fileObj) {
            console.log('Upload Percentage: ' + progress)
            // Update our progress bar
            self.setState({
              progress: progress
            });
          });

          uploadInstance.start(); // Must manually start the upload
        }
      }
    }


    showUploads() {
      console.log('**********************************', this.state.uploading);

      if (!_.isEmpty(this.state.uploading)) {
        return <div>
          {this.state.uploading.file.name}

          <div className="progress progress-bar-default">
            <div style={{width: this.state.progress + '%'}} aria-valuemax="100"
               aria-valuemin="0"
               aria-valuenow={this.state.progress || 0} role="progressbar"
               className="progress-bar">
              <span className="sr-only">{this.state.progress}% Complete (success)</span>
              <span>{this.state.progress}%</span>
            </div>
          </div>
        </div>
      }
    }

    render() {
      // debug("Rendering FileUpload",this.props.docsReadyYet);
      console.log("files : "+ this.props.docsReadyYet);
      // this.props.files && this.props.docsReadyYet
      if (true) {
        return (
          <div>
            <div className="row">
              <div className="col-md-12">
                <p>Upload New File:</p>
                <input type="file" id="fileinput"
                disabled={this.state.inProgress}
                ref="fileinput"
                    onChange={this.uploadIt}/>
              </div>
            </div>

            <div className="row m-t-sm m-b-sm">
              <div className="col-md-6">
                {/* {this.showImages()} */}
                {this.showUploads()}
              </div>
            </div>
          </div>)
      } else {
        return <p>loading . . .</p>
      }

    }
  }

  //
  // This is the HOC - included in this file just for convenience, but usually kept
  // in a separate file to provide separation of concerns.
  //
  export default withTracker( ( props ) => {
    const filesHandle = Meteor.subscribe('files.all');
    const docsReadyYet = filesHandle.ready();
    const files = UserFiles.find({}, {sort: {name: 1}}).fetch();

    return {
      docsReadyYet,
      files,
    };
  })(FileUpload);

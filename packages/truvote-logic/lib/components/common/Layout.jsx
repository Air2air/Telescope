import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";

class Layout extends Component {

  render() {

    return (
      <div className="wrapper container-fluid" id="wrapper">

        <Telescope.components.HeadTags />

        <Telescope.components.UsersProfileCheck {...this.props} />

        <Telescope.components.Header {...this.props}/>

          <FlashContainer component={Telescope.components.FlashMessages}/>

          {/* <Telescope.components.Newsletter /> */}

          {this.props.children}

        <Telescope.components.Footer {...this.props}/>
      
      </div>
    )

  }
}

Layout.displayName = "Layout";

module.exports = Layout;
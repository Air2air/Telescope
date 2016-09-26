import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const TruHeader = ({currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");

  return (

  <nav className="navbar navbar-fixed-top">

      <div className="row">

        <div className="navbar-logo col-xs-2">
          <Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
        </div>

        <div className="navbar-search col-xs-6">
          <Telescope.components.SearchForm />
        </div>

        <div className="navbar-alert col-xs-1">
          <Telescope.components.AlertDot/>
        </div>

        <div className="navbar-users col-xs-3">
          {currentUser ? <Telescope.components.UsersMenu user={currentUser}/> : <Telescope.components.UsersAccountMenu/>}
        </div>
      </div>
  </nav>

  )
}

TruHeader.displayName = "TruHeader";

module.exports = TruHeader;

import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const TruHeader = ({currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");

  return (
    <div className="header-wrapper">

      <header className="header">

          <Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />

          <Telescope.components.SearchForm/>

          {currentUser ? <Telescope.components.UsersMenu user={currentUser}/> : <Telescope.components.UsersAccountMenu/>}

          <Telescope.components.AlertDot/>

      </header>

    </div>
  )
}

TruHeader.displayName = "TruHeader";

module.exports = TruHeader;

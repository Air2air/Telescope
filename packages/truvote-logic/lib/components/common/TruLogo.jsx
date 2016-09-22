import React from 'react';
import { IndexLink } from 'react-router';

const TruLogo = ({logoUrl, siteTitle}) => {

    return (
      <div className="nav-logo">
      <div className="inner">
        <IndexLink to={{pathname: "/"}}>
          <img src={logoUrl} alt={siteTitle}/>
        </IndexLink>
      </div>
      </div>
    )
}

TruLogo.displayName = "TruLogo";

module.exports = TruLogo;
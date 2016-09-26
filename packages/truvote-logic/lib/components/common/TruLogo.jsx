import React from 'react';
import { IndexLink } from 'react-router';

const TruLogo = ({logoUrl, siteTitle}) => {

    return (

      	<div className="inner m-x-auto">
        	<IndexLink to={{pathname: "/"}}>
          		<img src={logoUrl} alt={siteTitle}/>
        	</IndexLink>
      	</div>

    )
}

TruLogo.displayName = "TruLogo";

module.exports = TruLogo;
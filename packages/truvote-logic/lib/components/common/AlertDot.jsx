import React from 'react';
import { IndexLink } from 'react-router';

const AlertDot = ({}) => {

    return (
    <div className="nav-alert-dot">
		<IndexLink to={{pathname: "/"}}>
			<div className="inner">
				<span>4</span>
			</div>
        </IndexLink>
    </div>
    )
}

AlertDot.displayName = "AlertDot";

module.exports = AlertDot;
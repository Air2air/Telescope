import React from 'react';
import { IndexLink } from 'react-router';

const AlertDot = ({}) => {

    return (
    <div className="m-x-auto">
		<IndexLink to={{pathname: "/"}}>
			<div className="inner grow">
				<span>4</span>
			</div>
        </IndexLink>
    </div>
    )
}

AlertDot.displayName = "AlertDot";

module.exports = AlertDot;
import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';


const TruGauge = () => {
	return (
		<div className="chart-inner">
			<Gauge 
			label="none" 
			min={0} 
			max={100} 
			value={40} 
			width={100} 
			height={100} 
			topLabelStyle="" 
			/>
		</div>
	);
}


TruGaugedisplayName = "TruGauge";

module.exports = TruGauge;
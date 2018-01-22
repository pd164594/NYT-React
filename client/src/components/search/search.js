import React from 'react';

const Search = () =>

	<div className="formGroup container-fluid">
		<p style={{"text-align": "center"}}>Topic</p>
		<input className="fromControl" style={{display:"block", margin: "auto"}}/><br/>
		<p style={{"text-align": "center"}}>Start Year</p>
		<input className="fromControl" style={{display:"block", margin: "auto"}}/><br/>
		<p style={{"text-align": "center"}}>End Year</p>
		<input className="fromControl" style={{display:"block", margin: "auto"}}/><br/>
	</div>

export default Search;


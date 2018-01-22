import React from 'react';

const Search = () =>

	<div className="formGroup container" style={{"border-style": "solid", "border-color":"Black", margin: "auto"}}>
		<form>
		<p style={{"text-align": "center"}}>Topic</p>
		<input className="fromControl" style={{display:"block", margin: "auto"}}/><br/>
		<p style={{"text-align": "center"}}>Start Year</p>
		<input className="fromControl" style={{display:"block", margin: "auto"}}/><br/>
		<p style={{"text-align": "center"}}>End Year</p>
		<input className="fromControl" style={{display:"block", margin: "auto"}}/><br/>
		<button style={{display:"block", margin: "auto"}}>Submit</button>

		</form>
	</div>

export default Search;


import React, {Component} from 'react';
import './Grid.css'

export default class Grid extends Component {

	constructor(){ 
		super();
	    this.state={
	      color : '#00BCD4'	 
	    }
  	}

	changeColor = () => {
		var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + 
						   ',' + (Math.floor(Math.random() * 256)) + ')';
		this.setState({color:ColorCode})
	}

	render() {
			return(
				<div>
					<button onClick={()=> this.changeColor()}> change me </button>
					<div className="flex-container">
						<div className="square" style={{backgroundColor:this.state.color}}>HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
						<div className="square">HELLO</div>
					</div>
				</div>
			);		
	}
}
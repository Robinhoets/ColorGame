import React, {Component} from 'react';
import './Grid.css'

export default class Grid extends Component {

	constructor(){ 
		super();
	    this.state={
	      color : '#00BCD4',
	      numSquares: 10,
	    }
  	}

	changeColor = () => {
		var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + 
						   ',' + (Math.floor(Math.random() * 256)) + ')';
		this.setState({color:ColorCode})
	}

	square(){
		let sq = []
		for(let i=0; i<16; i++){
			sq.push(<div className="square" style={{backgroundColor:this.state.color}}>HELLO</div>)
		}
		return sq
	}

	render() {
			return(
				<div>

					<button onClick={()=> this.changeColor()}> change me </button>
					<div className="flex-container">
						{this.square()}
					</div>
				</div>
			);		
	}
}
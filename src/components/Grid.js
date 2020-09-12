import React, {Component} from 'react';
import './Grid.css'

export default class Grid extends Component {

	constructor(){ 
		super();
	    this.state={
	      color : [],
	      numSquares: 10,
	    }
  	}

	changeColor = () => {
		let colors = []
		for(let i=0; i<16; i++){
			var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + 
						   ',' + (Math.floor(Math.random() * 256)) + ')';
				colors.push(ColorCode)
		}

		this.setState({color:colors})
	}

	square(){
		let sq = []
		for(let i=0; i<16; i++){
			sq.push(<div className="square" style={{backgroundColor:this.state.color[i]}}>HELLO</div>)
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
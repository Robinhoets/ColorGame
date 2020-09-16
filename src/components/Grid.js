import React, {Component} from 'react';
import './Grid.css'

export default class Grid extends Component {

	constructor(){ 
		super();
	    this.state={
	      color : [],
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

	logColorInformation = (color) => {
		console.log("in log color information", color)
	}

	square(){
		let sq = []
		for(let i=0; i<16; i++){
			sq.push(<button onClick={() => this.logColorInformation(this.state.color[i])} className="square" style={{backgroundColor:this.state.color[i]}}>Pick Me!</button>)
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
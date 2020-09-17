/***************************************************
 ***************************************************
 **				The Color Game					  **
 **			@author Robert Smith				  **
 **		The Color Game has a person pick their	  **
 **		favorite color. This information is		  **
 **		recorded and analyzed. The app serves	  **
 ** 	as a learning tool for data analysis	  **
 ** 	and user behavior.						  **
 ***************************************************
 ***************************************************/

import React, {Component} from 'react';
import './Grid.css'

export default class Grid extends Component {

	constructor(){ 
		super();
	    this.state={
	      color : [],
	      data :{},
	      id : 0,
	    }
  	}

/***********************************
 *			Functions area
 ***********************************/

 	/*
 	 *		@return Sets the state's color array with randomly
 	 *				generated color.
 	 */
	changeColor = () => {
		let colors = []
		for(let i=0; i<16; i++){
			var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
								   + (Math.floor(Math.random() * 256)) + ',' 
								   + (Math.floor(Math.random() * 256)) + ')';
				colors.push(ColorCode)
		}

		this.setState({color:colors})
	}

	/*
	 *		@input A chosen color
	 *		@input A chose location
	 *		@return Sets the state data variable
	 */
	logColorInformation = (color, location) => {
		var tempDataPoint = {location, color}
		var tempState = this.state.data
		var tempID = this.state.id
		tempState[tempID] = tempDataPoint
		tempID++
		this.setState({data:tempState, id:tempID})
	}

	/*
	 *	@return returns array of squares
	 *	@calls changeColor() for button styling
	 */
	square(){
		let sq = []
		for(let i=0; i<16; i++){
			sq.push(<button onClick={() => this.logColorInformation(this.state.color[i], i)} 
							className="square" style={{backgroundColor:this.state.color[i]}}>Pick Me!
					</button>)
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
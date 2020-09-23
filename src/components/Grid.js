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
import './Grid.css';
import Modal from 'react-modal';

export default class Grid extends Component {

	constructor(){ 
		super();
	    this.state={
	      color : [],
	      data :{},
	      id : 0,

	      lastTime : null,

	      startModalOpen:true,
	    }
  	}

  	/***********************************
  	 *			Handlers area
  	 ***********************************/	

  	 handleChange = () => {
  	 	this.logLastTime()
  	 	this.changeColor()
  	 }

	/***********************************
	 *			Functions area
	 ***********************************/

	/*
	 *	This is for testing
	 */
	logInfo(){
		console.log(this.state.data)
	}

	/*
	 *		@return logs initial time
	 */
	startGame(){
		var startTime = Date.now()
		this.setState({lastTime: startTime})
	}

	logLastTime(){
		var thisTime = Date.now()
		this.setState({lastTime: thisTime})
	}

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
		console.log(this.state.lastTime, Date.now())
	}

	/*
	 *		@input A chosen color
	 *		@input A chose location
	 *		@return Sets the state data variable
	 */
	logColorInformation = (color, location, time) => {
		var lastTime = this.state.lastTime
		var elapsedTime = time - lastTime
		var tempDataPoint = {location, color, elapsedTime}
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
			sq.push(<button onClick={() => this.logColorInformation(this.state.color[i], i, Date.now())} 
							className="square" style={{backgroundColor:this.state.color[i]}}>Pick Me!
					</button>)
		}
		return sq
	}

	startModalContent(){
		return(
			<> 
				Color Game
				<button onClick={() => this.setState({startModalOpen:false})}> Start Game </button>
				<p>Click the start game button. Then out of the four rows and four columns
					select the color you like the most. After selection, click the change me
					button to select the next color.</p>

			</>
		)
	}
	closeModal = () => {
		this.setState({startModalOpen:false})
	}
	afterOpenModal() {
    	
  	}


	render() {
			return(
				<div>
					<button onClick={()=> this.startGame()}> Start Game </button>
					<button onClick={()=> this.handleChange()}> change me </button>
					<button onClick={()=> this.logInfo()}> Log Info </button>
					<div className="flex-container">
						{this.square()}
					</div>
			        <Modal
			          isOpen={this.state.startModalOpen}
			          onAfterOpen={this.afterOpenModal}
			          onRequestClose={this.closeModal}
			        >
			        {this.startModalContent()}
			        </Modal>
				</div>
			);		
	}
}
import React from "react";
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			UserInput: "X",
			cell1: "",
			cell2: "",
			cell3: "",
			cell4: "",
			cell5: "",
			cell6: "",
			cell7: "",
			cell8: "",
			cell9: ""
		};
	}
	Jugar = cellId => {
		const newState = {};
		newState[cellId] = this.state.UserInput;
		if (this.state[cellId] === "") {
			this.setState(newState);
			this.setState({
				UserInput: this.state.UserInput === "X" ? "O" : "X"
			});
		}
	};
	render() {
		return (
			<div id="container" className="text-center mt-5">
				<div className="game-row">
					<div className="cell" onClick={() => this.Jugar("cell1")}>
						{this.state.cell1}
					</div>
					<div className="cell" onClick={() => this.Jugar("cell2")}>
						{this.state.cell2}
					</div>
					<div className="cell" onClick={() => this.Jugar("cell3")}>
						{this.state.cell3}
					</div>
				</div>
				<div className="game-row">
					<div className="cell" onClick={() => this.Jugar("cell4")}>
						{this.state.cell4}
					</div>
					<div className="cell" onClick={() => this.Jugar("cell5")}>
						{this.state.cell5}
					</div>
					<div className="cell" onClick={() => this.Jugar("cell6")}>
						{this.state.cell6}
					</div>
				</div>
				<div className="game-row">
					<div className="cell" onClick={() => this.Jugar("cell7")}>
						{this.state.cell7}
					</div>
					<div className="cell" onClick={() => this.Jugar("cell8")}>
						{this.state.cell8}
					</div>
					<div className="cell" onClick={() => this.Jugar("cell9")}>
						{this.state.cell9}
					</div>
				</div>
			</div>
		);
	}
}

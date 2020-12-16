import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CustomForm extends Component {
	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
			<div className="form-group">
			<label>Username: </label>
			<select ref="userInput"
				required
				className="form-control"
				value={this.props.state.username}
				onChange={this.props.onChangeUsername}>
				{
					this.props.state.users.map(function(user) {
					return <option
						key={user}
						value={user}>{user}
						</option>;
					})
				}
			</select>
			</div>
			<div className="form-group">
			<label>Description: </label>
			<input  type="text"
				required
				className="form-control"
				value={this.props.state.description}
				onChange={this.props.onChangeDescription}
				/>
			</div>
			<div className="form-group">
			<label>Duration (in minutes): </label>
			<input
				type="text"
				className="form-control"
				value={this.props.state.duration}
				onChange={this.props.onChangeDuration}
				/>
			</div>
			<div className="form-group">
			<label>Date: </label>
			<div>
				<DatePicker
				selected={this.props.state.date}
				onChange={this.props.onChangeDate}
				/>
			</div>
			</div>
			<div className="form-group">
			<label>Due Date: </label>
			<div>
				<DatePicker
				selected={this.props.state.ddate}
				onChange={this.props.onChangeDueDate}
				/>
			</div>
			</div>
	
			<div className="form-group">
			<input type="submit" value={this.props.submitMessage} className="btn btn-primary" />
			</div>
		</form>
		);
	}
};

export default CustomForm;
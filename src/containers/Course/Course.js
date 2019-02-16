import React, { Component } from "react";
import withStyles from "react-jss";
import queryString from "query-string";

const styles = {
	BackButton: {
		padding: [4, 16],
		textTransform: "uppercase",
		backgroundColor: "#b71c1c",
		borderColor: "#b71c1c",
		borderRadius: "0.25em",
		cursor: "pointer",
		fontWeight: "bold",
		color: "#FFF"
	}
};

class Course extends Component {
	static contextTypes = {
		router: () => null
	};

	render() {
		const { id, title } = queryString.parse(this.props.location.search);
		const { classes } = this.props;
		return (
			<div>
				<h1>{title}</h1>
				<p>You selected the Course with ID: {id}</p>
				<button
					className={classes.BackButton}
					onClick={this.context.router.history.goBack}
				>
					Back
				</button>
			</div>
		);
	}
}

export default withStyles(styles)(Course);

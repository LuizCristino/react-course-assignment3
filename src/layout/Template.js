import React from "react";
import Navbar from "../components/Navbar";
import withStyles from "react-jss";

const styles = {
	container: {
		padding: [8, 16]
	}
};

const template = ({ classes, children }) => {
	return (
		<div>
			<Navbar links={["Users", "Courses"]} />
			<main className={classes.container}>{children}</main>
		</div>
	);
};

export default withStyles(styles)(template);

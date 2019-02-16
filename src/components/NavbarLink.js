import React from "react";
import withStyles from "react-jss";
import { NavLink } from "react-router-dom";

// Part of css comes from Lumen
const styles = {
	NavbarLink: {
		listStyleType: "none",
		display: "block",
		color: "#FFF",
		padding: 8,
		margin: [0, 4],
		boxSizing: "border-box",
		borderStyle: "solid",
		borderWidth: [1, 1, 4, 1],
		borderRadius: "0.25em",
		cursor: "pointer",
		textDecoration: "none",
		transition:
			"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
		"&:hover": {
			borderBottomWidth: 3,
			marginTop: 1,
			backgroundColor: "#CCC",
			borderColor: "#CCC",
			borderBottomColor: "#FFF",
			color: "#000"
		},
		"&.active": {
			backgroundColor: "#FFF",
			borderColor: "#000",
			color: "#000",
			"&:hover": {
				borderWidth: [1, 1, 4, 1],
				marginTop: 0
			}
		}
	}
};

const navbarLink = ({ classes, value, to, ...props }) => {
	return (
		<NavLink
			to={to ? to : `/${value.toLowerCase()}`}
			className={classes.NavbarLink}
			{...props}
		>
			<li>{value}</li>
		</NavLink>
	);
};

export default withStyles(styles)(navbarLink);

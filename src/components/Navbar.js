import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import NavbarLink from "./NavbarLink";

const styles = {
	NavBar: {
		width: "100%",
		backgroundColor: "#757575",
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		borderBottom: "5px inset #494949"
	},
	NavLinks: {
		listStyle: "none",
		margin: 0,
		padding: 8,
		display: "flex"
	}
};

const navBar = ({ classes, links }) => {
	return (
		<div className={classes.NavBar}>
			<div className={classes.NavLinks}>
				<NavbarLink value="Home" to="/" exact />
			</div>
			<div>
				<ul className={classes.NavLinks}>
					{links.map(l => (
						<NavbarLink key={l} value={l} />
					))}
				</ul>
			</div>
		</div>
	);
};

navBar.propTypes = {
	links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(styles)(navBar);

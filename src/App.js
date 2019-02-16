import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";
import Template from "./layout/Template";
import Home from "./containers/Home/Home";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";
import Courses from "./containers/Courses/Courses";
import ErrorPage from "./components/ErrorPage";

const app = () => {
	return (
		<Router>
			<Template>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/users" component={Users} />
					<Redirect from="/all-courses" to="/courses" />
					<Route exact path="/courses" component={Courses} />
					<Route exact path="/courses/course" component={Course} />
					<Route component={ErrorPage} />
				</Switch>
			</Template>
		</Router>
	);
};

export default app;

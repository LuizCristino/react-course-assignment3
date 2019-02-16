import React, { Component } from "react";

import "./Courses.css";

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: "Angular - The Complete Guide" },
			{ id: 2, title: "Vue - The Complete Guide" },
			{ id: 3, title: "PWA - The Complete Guide" }
		]
	};

	loadCourseHandler = courseID => {
		const courseTitle = this.state.courses.filter(el => el.id === courseID)[0]
			.title;
		this.props.history.push({
			pathname: `${this.props.match.url}/course`,
			search: `?id=${courseID}&title=${courseTitle}`
		});
	};

	render() {
		return (
			<div>
				<h1>Amazing Udemy Courses</h1>
				<section className="Courses">
					{this.state.courses.map(course => {
						return (
							<article
								className="Course"
								key={course.id}
								onClick={() => this.loadCourseHandler(course.id)}
							>
								{course.title}
							</article>
						);
					})}
				</section>
			</div>
		);
	}
}

export default Courses;

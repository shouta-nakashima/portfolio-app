import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import BasePage from "../components/BasePage";

class Portfolio extends React.Component {
	static async getInitialProps({ query }) {
		let post = {};
		try {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${query.id}`
			);
			post = res.data;
		} catch (e) {
			console.log(e);
		}
		return { portfolio: post };
	}

	render() {
		const { portfolio } = this.props;
		return (
			<BaseLayout>
				<BasePage>
					<h1>Hello Portfolio page</h1>
					<h1>{portfolio.title}</h1>
					<p>{portfolio.body}</p>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default Portfolio;

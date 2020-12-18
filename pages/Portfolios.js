import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Portfolios extends React.Component {
	static async getInitialProps() {
		let posts = [];
		try {
			const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
			posts = res.data;
		} catch (e) {
			console.log(e);
		}
		return { posts: posts.slice(0, 10) };
	}
	render() {
		const { posts } = this.props;
		return (
			<BaseLayout>
				<h1>Hello Portfolios</h1>
				<ul>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</BaseLayout>
		);
	}
}

export default Portfolios;

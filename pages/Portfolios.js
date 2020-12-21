import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
//import Link from "next/link";
import { Link } from "../routes";
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

	renderPosts(posts) {
		return posts.map((post) => (
			<li style={{ fontSize: "20px" }} key={post.id}>
				<Link route={`/portfolio/${post.id}`}>
					<a>{post.title}</a>
				</Link>
			</li>
		));
	}
	render() {
		const { posts } = this.props;
		return (
			<BaseLayout>
				<h1>Hello Portfolios</h1>
				<ul>{this.renderPosts(posts)}</ul>
			</BaseLayout>
		);
	}
}

export default Portfolios;

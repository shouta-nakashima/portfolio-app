import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import Link from "next/link";
import axios from "axios";
import BasePage from "../../components/BasePage";

const Portfolios = ({ posts }) => {
	const renderPosts = (posts) => {
		return posts.map((post) => (
			<li style={{ fontSize: "20px" }} key={post.id}>
				<Link as={`/Portfolios/${post.id}`} href="/Portfolios/[id]">
					<a>{post.title}</a>
				</Link>
			</li>
		));
	};
	return (
		<BaseLayout>
			<BasePage>
				<h1>Hello Portfolios</h1>
				<ul>{renderPosts(posts)}</ul>
			</BasePage>
		</BaseLayout>
	);
};

Portfolios.getInitialProps = async () => {
	let posts = [];
	try {
		const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
		posts = res.data;
	} catch (e) {
		console.log(e);
	}
	return { posts: posts.slice(0, 10) };
};

export default Portfolios;

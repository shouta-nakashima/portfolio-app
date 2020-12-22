import React, { useEffect, useState } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "../../components/BasePage";

const Portfolios = () => {
	const [posts, setPosts] = useState([]);
	const getPosts = async () => {
		const res = await fetch("/api/v1/posts");
		const data = await res.json();
		setPosts(data);
		console.log(data);
	};

	useEffect(() => {
		getPosts();
	}, []);

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

export default Portfolios;

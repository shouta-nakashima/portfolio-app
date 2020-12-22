import React, { useEffect, useState } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "../../components/BasePage";

const Portfolios = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState();

	const getPosts = async () => {
		const res = await fetch("/api/v1/posts");
		const data = await res.json();

		if (res.status !== 200) {
			setError(data);
		} else {
			setPosts(data);
		}
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

				{posts && <ul>{renderPosts(posts)}</ul>}
				{error && (
					<h4 className="text-danger">
						{error.message}のため、現在表示できません。
					</h4>
				)}
			</BasePage>
		</BaseLayout>
	);
};

export default Portfolios;

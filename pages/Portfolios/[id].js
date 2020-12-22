import React, { useState, useEffect } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import { useRouter } from "next/router";

const Portfolio = () => {
	const router = useRouter();
	const [post, setPost] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	const getPost = async () => {
		const res = await fetch(`/api/v1/posts/${router.query.id}`);
		const data = await res.json();

		if (res.status !== 200) {
			setError(data);
		} else {
			setPost(data);
		}

		setLoading(false);
	};

	useEffect(() => {
		getPost();
	}, []);

	return (
		<BaseLayout>
			<BasePage>
				<h1>Hello Portfolio page</h1>
				{post && (
					<>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
					</>
				)}
				{loading && <p>loading...</p>}
				{error && (
					<h4 className="text-danger">
						{error.message}のため、現在表示できません。
					</h4>
				)}
			</BasePage>
		</BaseLayout>
	);
};

export default Portfolio;

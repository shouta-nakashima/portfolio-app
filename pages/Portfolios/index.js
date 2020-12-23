import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "../../components/BasePage";
import { useGetPost } from "../../actions/index";

const Portfolios = () => {
	const { data, error, loading } = useGetPost();

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

				{data && <ul>{renderPosts(data)}</ul>}
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

export default Portfolios;

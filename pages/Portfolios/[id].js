import React, { useState, useEffect } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import { useRouter } from "next/router";
import { useGetPostById } from "../../actions/index";

const Portfolio = () => {
	const router = useRouter();
	const { data, error, loading } = useGetPostById(router.query.id);

	return (
		<BaseLayout>
			<BasePage>
				<h1>Hello Portfolio page</h1>
				{data && (
					<>
						<h1>{data.title}</h1>
						<p>{data.body}</p>
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

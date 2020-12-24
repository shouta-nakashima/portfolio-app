import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "../actions/user";
import auth0 from "../utils/auth0";

const SecretSSR = ({ user }) => {
	console.log(user);
	return (
		<BaseLayout user={user} Loading={false}>
			<BasePage>
				<h1 className="castomClass">
					Hello Secret - Hello {user && user.name}
				</h1>
			</BasePage>
		</BaseLayout>
	);
};

export const getServerSideProps = async ({ req, res }) => {
	const session = await auth0.getSession(req);
	if (!session || !session.user) {
		res.writeHead(302, {
			Location: "/api/v1/login",
		});
		res.end();
		return { props: {} };
	}
	return {
		props: { user: session.user },
	};
};

export default SecretSSR;

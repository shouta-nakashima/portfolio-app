import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import withAuth from "../hoc/withAuth";

const Admin = ({ user, loading }) => {
	return (
		<BaseLayout user={user} loading={loading}>
			<BasePage>
				<h1 className="castomClass">Hello Admin - Hello {user.name}</h1>
			</BasePage>
		</BaseLayout>
	);
};

export default withAuth(Admin)("admin");

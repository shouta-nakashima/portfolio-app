import React from "react";
import Header from "../shared/Header";

const BaseLayout = (props) => {
	const { className, user, loading, children } = props;
	return (
		<div className="layout-container">
			<Header user={user} loading={loading} />
			<main className={`cover ${className}`}>
				<div className="wrapper">
					<h1 style={{ color: "white" }} className="text-center mt-2">
						Nakaji's Room
					</h1>
					{children}
				</div>
			</main>
		</div>
	);
};

export default BaseLayout;

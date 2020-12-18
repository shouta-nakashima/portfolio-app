import React from "react";
import Link from "next/link";

class Header extends React.Component {
	render() {
		return (
			<>
				<Link href="/">
					<a> Home </a>
				</Link>
				<Link href="/About">
					<a> About </a>
				</Link>
				<Link href="/Blogs">
					<a> Blogs </a>
				</Link>
				<Link href="/Portfolios">
					<a> Portfolio </a>
				</Link>
				<Link href="/Cv">
					<a> Cv </a>
				</Link>
			</>
		);
	}
}

export default Header;

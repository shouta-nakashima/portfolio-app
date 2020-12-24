import React, { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const Header = ({ user, loading }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const LoginLink = () => (
		<Link href="/api/v1/login">
			<a className="nav-link port-navbar-link"> Login</a>
		</Link>
	);

	const LogoutLink = () => (
		<Link href="/api/v1/logout">
			<a className="nav-link port-navbar-link"> Logout</a>
		</Link>
	);

	return (
		<span>
			<Navbar
				className="port-navbar port-default absolute mt-5"
				color="transparent"
				dark
				expand="md">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem className="port-navbar-item">
							<Link href="/">
								<a className="nav-link port-navbar-link"> Home </a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="/About">
								<a className="nav-link port-navbar-link"> About </a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="/Blogs">
								<a className="nav-link port-navbar-link"> Blog </a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/Portfolios">
								<a className="nav-link port-navbar-link"> Portfolios</a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="/Cv">
								<a className="nav-link port-navbar-link"> Cv </a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="https://github.com/shouta-nakashima">
								<a className="nav-link port-navbar-link"> GitHub </a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="/secret">
								<a className="nav-link port-navbar-link"> Secret </a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="/secretSsr">
								<a className="nav-link port-navbar-link"> SecretSSR </a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="/admin">
								<a className="nav-link port-navbar-link"> Admin </a>
							</Link>
						</NavItem>
						<NavItem className="port-navbar-item">
							<Link href="/adminssr">
								<a className="nav-link port-navbar-link"> AdminSSR </a>
							</Link>
						</NavItem>
					</Nav>
					<Nav navbar>
						{!loading && (
							<>
								{user && (
									<NavItem className="port-navbar-item">
										<LogoutLink />
									</NavItem>
								)}
								{!user && (
									<NavItem className="port-navbar-item">
										<LoginLink />
									</NavItem>
								)}
							</>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</span>
	);
};

export default Header;

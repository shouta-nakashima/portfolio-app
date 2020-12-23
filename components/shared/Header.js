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
				className="port-navbar port-default absolute"
				color="transparent"
				dark
				expand="md">
				<Link href="/">
					<a className="port-navbar-brand">Nakaji's Room</a>
				</Link>
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

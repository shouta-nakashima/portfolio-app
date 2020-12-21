import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";

const ROLE = ["React", "Node", "NextJS", "GraphQL", "TypeScript"];
class index extends React.Component {
	render() {
		return (
			<BaseLayout className="cover">
				<div className="main-section">
					<div className="background-image">
						<img src="/images/background-index.png" />
					</div>

					<Container>
						<Row>
							<Col md="6">
								<div className="hero-section">
									<div className={`flipper`}>
										<div className="back">
											<div className="hero-section-content">
												<h2> Shota Nakahima </h2>
												<div className="hero-section-content-intro">
													Full Stack Web Engineer
													<br />
													The language is　
													<Typed
														loop
														strings={ROLE}
														typeSpeed={70}
														backSpeed={70}
														backDelay={1000}
														loopCount={0}
														showCursor
														className="self-typed"
														cursorChar="|"></Typed>
												</div>
											</div>
											<img className="image" src="/images/portfolio.jpg" />
											<div className="shadow-custom">
												<div className="shadow-inner"> </div>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md="6" className="hero-welcome-wrapper">
								<div className="hero-welcome-text">
									<h1>
										Nakaji's Roomにようこそ！
										<br />
										<br />
										ここは私のこれまで取り組んできたことや学習してきた事、日々の出来事を記録する場所です。
										<br />
										また、チーム、個人で開発してきたプロジェクトも掲載しています。
										<br />
										<br />
										お時間の許す限り、気軽に楽しんでいってください^^
									</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</BaseLayout>
		);
	}
}

export default index;

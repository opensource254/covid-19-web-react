import React from "react"
import FadeIn from "react-fade-in"

import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"

class AboutPage extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="About Application" />

                <FadeIn>
                    <Card align="left">
                        <h4>
                            #OpenSource{" "}
                            <span role="img" aria-label="Virus">
                                🦠
                            </span>{" "}
                            COVID-19 tracker
                        </h4>
                        <hr />
                        <div className="author">
                            <ul>
                                <li>
                                    <span role="img" aria-label="Computer">
                                        💻
                                    </span>{" "}
                                    Authors:{" "}
                                    <a
                                        className="interactive"
                                        href="http://github.com/cyrus43/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Cyrus Mbithi
                                    </a>
                                    &
                                    <a
                                        className="interactive"
                                        href="http://github.com/BILLthebuilder"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Bill Kariri
                                    </a>
                                    . Follow us on twitter{" "}
                                     too{" "}
                                    <span role="img" aria-label="LOL">
                                        😁
                                    </span>
                                    <a
                                        className="interactive"
                                        href="https://twitter.com/cyrusmbithi92"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Cyrus
                                    </a>{" "}
                                    &
                                    <a
                                        className="interactive"
                                        href="https://twitter.com/billkariri"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Bill
                                    </a>{" "}
                                </li>

                                <li>
                                    <span role="img" aria-label="Pull request">
                                        🔄
                                    </span>{" "}
                                    If you'd like to contribute or have issue with the site submit an issue here{" "}
                                    <a
                                        className="interactive"
                                        href="https://github.com/Opensource-254/covid-19-web-react"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        covid-19kenya
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <p>
                            This is an <strong>#OpenSource</strong> application dedicated on
                            tracking <strong>Coronavirus outbreak</strong> globally from the public
                            data source available in the internet{" "}
                            <span role="img" aria-label="Earth">
                                🌎
                            </span>
                            . Please note I'm not liable for any kind of misinformative data shown
                            here.
                        </p>
                    </Card>
                </FadeIn>
            </Layout>
        )
    }
}

export default AboutPage

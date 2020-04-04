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
                                    Author:{" "}
                                    <a
                                        className="interactive"
                                        href="http://github.com/cyrus43/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Cyrus Mbithi
                                    </a>
                                    . Also I'm pretty active on{" "}
                                    <a
                                        className="interactive"
                                        href="https://twitter.com/cyrusmbithi92"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </a>{" "}
                                    though.{" "}
                                    <span role="img" aria-label="LOL">
                                        😁
                                    </span>
                                </li>

                                <li>
                                    <span role="img" aria-label="Pull request">
                                        🔄
                                    </span>{" "}
                                    If you'd like to contribute, submit a <strong>PR</strong> here{" "}
                                    <a
                                        className="interactive"
                                        href="https://github.com/cyrus43/covid-19kenya"
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

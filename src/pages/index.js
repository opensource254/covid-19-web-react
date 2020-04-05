import React from "react"
import FadeIn from "react-fade-in"

import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Widget from "../components/Widget/Widget"
import IndiaData from "../components/KenyaData/KenyaData"
import Placeholder from "../components/Placeholder/Placeholder"

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            globalData: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://coronavirus-19-api.herokuapp.com/all")
            .then(response => response.json())
            .then(json => {
                setTimeout(
                    () =>
                        this.setState({
                            globalData: json,
                            isLoaded: true,
                        }),
                    1000 // ⏱ set loading time in milisecond
                )
            })
            .catch(errorMessage => {
                this.setState({
                    errorMessage: "😕 Error fetching data. Please try again",
                    isLoaded: true,
                })
            })
    }

    render() {
        const { globalData, errorMessage } = this.state
        // if(errorMessage) return <div className="error-rk">{errorMessage}</div>

        return (
            <Layout>
                <SEO title="Global Outbreak" />

                <div className="heading--title">
                    <h1>Global outbreak</h1>
                </div>

                {/* Conditional operator to decide what to show */}
                {this.state.isLoaded ? (
                    <FadeIn>
                        <div className="Grid--Row">
                            <div className="Grid--Item">
                                <Widget
                                    styleName="warning"
                                    align="center"
                                    value={globalData.cases.toLocaleString("en-US")} // .toLocaleString(navigator.language, { minimumFractionDigits: 0 })
                                    label="Confirmed cases"
                                />
                            </div>
                            <div className="Grid--Item">
                                <Widget
                                    styleName="success"
                                    align="center"
                                    value={globalData.recovered.toLocaleString("en-US")}
                                    label="Recovered"
                                />
                            </div>
                            <div className="Grid--Item">
                                <Widget
                                    styleName="danger"
                                    align="center"
                                    value={globalData.deaths.toLocaleString("en-US")}
                                    label="Deaths"
                                />
                            </div>
                        </div>
                    </FadeIn>
                ) : (
                    <div className="Grid--Row">
                        <div className="Grid--Item">
                            <Placeholder />
                        </div>
                        <div className="Grid--Item">
                            <Placeholder />
                        </div>
                        <div className="Grid--Item">
                            <Placeholder />
                        </div>
                    </div>
                )}

                {errorMessage ? (
                    <>
                        <hr />
                        <div>{errorMessage}</div>
                    </>
                ) : null}

                <hr />
                <IndiaData />
            </Layout>
        )
    }
}

export default IndexPage

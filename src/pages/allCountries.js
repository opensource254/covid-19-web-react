import React from "react"
import FadeIn from "react-fade-in"

import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import CountryWidget from "../components/Widget/CountryWidget"
import Placeholder2 from "../components/Placeholder/Placeholder2"

import "../components/Layout/_grid.scss"

class allCountries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            countryData: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://coronavirus-19-api.herokuapp.com/countries")
            .then(response => response.json())
            .then(json => {
                setTimeout(
                    () =>
                        this.setState({
                            countryData: json,
                            isLoaded: true,
                        }),
                    1000 // ⏱ Set loading time in milisecond
                )
            })
            .catch(errorMessage => {
                this.setState({
                    errorMessage: "😕 Error fetching data. Please try again",
                    isLoaded: true,
                })
            })
    }

    handleChange = event => {
        this.setState({
            search: event.target.value.substr(0, 48),
        })
    }

    render() {
        const { errorMessage } = this.state
        const filteredCountries = this.state.countryData.filter(countryData => {
            return (
                countryData.country.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !==
                -1
            )
        })
        return (
            <Layout>
                <SEO title="All Countries" />

                <div className="Countries">
                    <div className="Sticky-Search-bar">
                        <input
                            className="Search"
                            placeholder="Type to search country.."
                            value={this.state.search}
                            onChange={this.handleChange.bind(this)}
                        />
                        <div className="search-icon">
                            <div className="icon"></div>
                        </div>
                    </div>
                    {this.state.isLoaded ? (
                        <FadeIn>
                            <div>
                                {filteredCountries.map(countryData => (
                                    <CountryWidget
                                        key={countryData.country}
                                        countryName={countryData.country}
                                        totalCases={countryData.cases.toLocaleString("en-US")}
                                        todayCases={countryData.todayCases.toLocaleString("en-US")}
                                        activeCases={countryData.active.toLocaleString("en-US")}
                                        totalDeaths={countryData.deaths.toLocaleString("en-US")}
                                        todayDeaths={countryData.todayDeaths.toLocaleString(
                                            "en-US"
                                        )}
                                        totalRecovered={
                                            countryData.recovered !== null
                                                ? countryData.recovered.toLocaleString("en-US")
                                                : 0
                                        }
                                        critical={countryData.critical.toLocaleString("en-US")}
                                    />
                                ))}
                            </div>
                        </FadeIn>
                    ) : (
                        <React.Fragment>
                            <Placeholder2 />
                            <Placeholder2 />
                            <Placeholder2 />
                            <Placeholder2 />
                        </React.Fragment>
                    )}

                    {errorMessage ? (
                        <>
                            <hr />
                            <div>{errorMessage}</div>
                        </>
                    ) : null}
                </div>
            </Layout>
        )
    }
}

export default allCountries

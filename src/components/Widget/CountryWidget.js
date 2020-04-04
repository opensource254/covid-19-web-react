import React from "react"

import "./CountryWidget.scss"

class CountryWidget extends React.Component {
    render() {
        const {
            countryName,
            totalCases,
            todayCases,
            activeCases,
            totalDeaths,
            todayDeaths,
            totalRecovered,
            critical,
        } = this.props
        return (
            <div className="Widget--2">
                <h2>{countryName}</h2>
                <div className="Country--meta">
                    <ul>
                        <li>
                            <strong>Cases:</strong> <span>{totalCases}</span>
                        </li>
                        <li>
                            <strong>Today:</strong> <span>{todayCases}</span>
                        </li>
                        <li>
                            <strong>Active:</strong> <span>{activeCases}</span>
                        </li>
                    </ul>
                </div>
                <div className="Country--meta">
                    <ul>
                        <li>
                            <strong>Deaths:</strong> <span>{totalDeaths}</span>
                        </li>
                        <li>
                            <strong>Today:</strong> <span>{todayDeaths}</span>
                        </li>
                    </ul>
                </div>
                <div className="Country--meta">
                    <ul>
                        <li>
                            <strong>Recovered:</strong> <span>{totalRecovered}</span>
                        </li>
                        <li>
                            <strong>Critical :</strong> <span>{critical}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CountryWidget

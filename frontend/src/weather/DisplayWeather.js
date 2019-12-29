import React from 'react'
import './CityList.css';
import { connect } from 'react-redux'


const CityList = props => {
    const { weatherData } = props;
    const displayData = () => {
        return <React.Fragment>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="columnWidth">Type</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(weatherData.main).map(key => {
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{weatherData.main[key]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    }
    return (
        <React.Fragment>
            <div className="row addMargin">
                <div className="col-md-12">
                    {
                        weatherData === null
                            ? 'Select City to view weather'
                            : weatherData === "error"
                                ? 'Error in fetching weather'
                                : displayData()
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weather.weatherData
    }
}

export default connect(
    mapStateToProps,
    null
)(CityList)

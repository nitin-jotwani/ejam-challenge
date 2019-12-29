import React, { useState } from 'react'
import './CityList.css';
import { connect } from 'react-redux'


const CityList = props => {
    const { weatherData } = props;
    const [selectedCity, setSelectedCity] = useState('');
    const selectCity = (event) => {
        const selectedCity = event.target.getAttribute('value');
        console.log(event.target.getAttribute('value'))
        setSelectedCity(selectedCity);
    }

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
                        weatherData
                            ? displayData()
                            : 'Select City to view weather'
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

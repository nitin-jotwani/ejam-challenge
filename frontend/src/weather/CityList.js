import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setSelectedCity, setWeatherData } from '../redux/action'
import './CityList.css';

const CityList = props => {
    const { cities, setWeatherData } = props;
    const [selectedCity, setSelectedCity] = useState('');
    const selectCity = (value) => {
        setSelectedCity(value);
    }
    const getWeather = async () => {
        if (selectedCity && selectedCity.length) {
            try {
                const weatherDataFetch = await fetch('http://localhost:3005/getWeather?city='+selectedCity);
                const weatherData = await weatherDataFetch.json();
                setWeatherData(weatherData);
            } catch (error) {
                setWeatherData("error");
            }
            // fetch('https://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&appid=ff721161d6d355dc779b8ba2c967e3ee&units=metric')
            //     .then(function (response) {
            //         return response.json();
            //     }).then(function (data) {
            //         setWeatherData(data)
            //     });
        }
    }
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6" onClick={(e) => selectCity(e.target.getAttribute('value'))}>
                    {
                        cities.map(city => <a
                            href="#"
                            key={city.id}
                            value={city.name}
                            className={`list-group-item ${selectedCity == city.name ? 'active' : ''}`}>
                            {city.name}
                        </a>
                        )
                    }
                </div>
                <div className="col-md-3 addMarginMobile">
                    <button type="button" className="btn btn-primary btnWidth" onClick={() => getWeather()}>Get Weather</button>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        cities: state.weather.cities,
        selectedCity: state.weather.selectedCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedCity: (cityName) => {
            dispatch(setSelectedCity({ cityName }))
        },
        setWeatherData: (data) => {
            dispatch(setWeatherData({ data }));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityList)

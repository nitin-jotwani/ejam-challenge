import React from 'react'
import CityList from './weather/CityList'
import DisplayWeather from './weather/DisplayWeather'

const App = () => {
  return (
    <div className="container">
      <h1>View Weather</h1>
      <CityList />
      <DisplayWeather />
    </div>
  )
}

export default App
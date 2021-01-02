import React, {Component} from 'react';
import './Global.css';
import WorldStats from '../components/WorldStats/WorldStats';
import axios from 'axios';
import NumberFormat from 'react-number-format';

export default class Global extends Component {

  state = {
    result: {
      "TotalConfirmed": 0,
      "TotalDeaths": 0,
      "TotalRecovered": 0,
      "ActiveCase": 0
    }
  }
  
  async componentDidMount() {
    var globalData = await axios.get("https://api.covid19api.com/summary");
  
    let corona = globalData.data.Global
  
    this.setState({
      result: {
        "TotalConfirmed": corona.TotalConfirmed,
        "TotalDeaths": corona.NewDeaths,
        "TotalRecovered": corona.TotalRecovered,
        "ActiveCase": corona.TotalConfirmed - (corona.TotalRecovered + corona.TotalDeaths)
      }
    })
  }

  render() {
    var Stats = Object.keys(this.state.result).map((key, index) => {
      return <WorldStats
        key={index}
        about={key}
        total={<NumberFormat value={this.state.result[key]} thousandSeparator={true} displayType="text" />}
      />
    })

    return (
      <div className='Global'>
        <h1 className='heading'>Covid-19 Tracker</h1>
        <p className='description'>Let's check information about covid-19</p>
      
        <div className='world-stats'>
          {Stats}
        </div>
      </div>
    )
  }
}

/* 
Case study, hardcore data:
<WorldStats
          key="1"
          about="Total Cases"
          total="255,134"
        />
        <WorldStats
          key="2"
          about="Total Deaths"
          total="25,510"
        />
        <WorldStats
        key="3"
        about="Total Recovered"
        total="155,134"
      />
      
        var Stats = Object.keys(this.state.result).map((key, index) => {
      return <WorldStats
        key={index}
        about={key}
        total={this.state.result[key]}
      */
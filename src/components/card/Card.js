import React, { Component } from 'react';
import date from 'date-and-time';

import './card.scss';

import Pressure from './img/pressure.svg';
import Humidity from './img/humidity.svg';

class Card extends Component {
  state = {
    time: '',
    temp: '',
    pressure: '',
    humidity: '',
    loading: true
  };

  componentDidMount() {

    setInterval(() => this.setState({ time: date.format(new Date(), 'HH:mm:ss') }), 1000);

    setInterval(() => {
      fetch('http://195.54.163.180:5000/api/weather')
        .then(res => res.json())
        .then((data) => {
          const lastDataUpdate = data[data.length - 1];
          const { temp, pressure, humidity } = lastDataUpdate;

          this.setState({ temp, pressure, humidity, loading: false });
        });
    }, 3000);
  }

  render() {
    const { time, temp, pressure, humidity, loading } = this.state;

    return (
      <div className="card">
        <div className="card__top">
          <div className="title">Today's Weather</div>
          <div className="card__time">
            <p className="time">{time}</p>
            <p className="date">{date.format(new Date(), 'ddd MMM DD YYYY')}</p>
          </div>
        </div>
        <div className={`card__bottom${loading ? ' loading' : ''}`}>
          <div className="temp">
            <p>{temp}<span>°C</span></p>
          </div>
          <ul className="params">
            <li>
              <p>
                {pressure}
                <span>hPa</span>
              </p>
              <img src={Pressure} alt=""/>
            </li>
            <li>
              <p>
                {humidity}
                <span>%</span>
              </p>
              <img src={Humidity} alt=""/>
            </li>
          </ul>
        </div>
        <div className="peron">
          <p>Nure IMI</p>
        </div>
      </div>
    );
  }
}

export default Card;

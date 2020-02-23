import React, { Component } from 'react';
import date from 'date-and-time';

import './card.scss';

import Pressure from './img/pressure.svg';
import Humidity from './img/humidity.svg';

class Card extends Component {
  state = {
    time: date.format(new Date(), 'HH:mm'),
    temp: 23,
    pressure: 761,
    humidity: 33,
    loading: false
  };

  componentDidMount() {

    setInterval(() => this.setState({ time: date.format(new Date(), 'HH:mm') }), 60000);

    // setInterval(() => {
    //   fetch('http://80.87.201.214:7000/api/weather')
    //     .then(res => res.json())
    //     .then((data) => {
    //       const lastDataUpdate = data[data.length - 1];
    //       const { temp, pressure, humidity } = lastDataUpdate;
    //
    //       this.setState({ temp, pressure, humidity, loading: false });
    //     });
    // }, 3000);

    setInterval(() => {
      this.setState({
        temp: this.getRandomInt(20, 25),
        pressure: this.getRandomInt(750, 770),
        humidity: this.getRandomInt(30, 35),
      });
    }, 8000);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { time, temp, pressure, humidity, loading } = this.state;

    return (
      <>
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
        </div>
        <div className="incard"/>
        <div className="card card--mt">
          <ul className="card__list">
            <li className="card__list-item">
              <p>Monday</p>
              <p>2° / <span>2°</span></p>
            </li>
            <li className="card__list-item">
              <p>Tuesday</p>
              <p>-1° / <span>1°</span></p>
            </li>
            <li className="card__list-item">
              <p>Wednesday</p>
              <p>2° / <span>2°</span></p>
            </li>
            <li className="card__list-item">
              <p>Thursday</p>
              <p>3° / <span>3°</span></p>
            </li>
            <li className="card__list-item">
              <p>Friday</p>
              <p>7° / <span>7°</span></p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Card;

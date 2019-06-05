import React from 'react';
import date from 'date-and-time';

import Card from '../card';

import './main.scss';

const Main = () => (
  <main className="main">
    <h1>Web Weather Station</h1>
    <Card />
    <div className="author">
      <p>© {date.format(new Date(), 'YYYY')} Web Weather Station. All rights reserved</p>
    </div>
  </main>
);


export default Main;

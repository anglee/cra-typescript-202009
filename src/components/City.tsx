import { List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICity } from '../gensrc/api';

interface IProps {
  city: ICity;
  unit: 'F' | 'C';
}
function City({ city, unit }: IProps) {
  const toCelsius = (f: number) => Math.round(((f - 32) * 5) / 9);
  return (
    <List.Item>
      <div className={city.temp > 80 ? 'hot' : ''}>
        <Link to={`/cities/${city.id}`}>{city.name}</Link>{' '}
        {unit === 'F' ? city.temp : toCelsius(city.temp)}°
      </div>
    </List.Item>
  );
}

export default City;

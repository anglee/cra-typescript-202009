import { Empty, List } from 'antd';
import React from 'react';
import City from './City';
import { ICity } from '../gensrc/api';

interface IProps {
  cities: ICity[];
  unit: 'F' | 'C';
}

function CityList({ cities, unit }: IProps) {
  return cities.length ? (
    <List size="large">
      {cities.map((city) => (
        <City key={city.id} city={city} unit={unit} />
      ))}
    </List>
  ) : (
    <Empty />
  );
}

export default CityList;

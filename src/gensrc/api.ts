import _ from 'lodash';

export interface ICity {
  id: number;
  name: string;
  temp: number;
}

const cities: ICity[] = [
  { id: 1, name: 'New York', temp: 75 },
  { id: 2, name: 'Kyoto', temp: 73 },
  { id: 3, name: 'Taipei', temp: 84 },
];

export interface ICityDetails {
  id: number;
  name: string;
  temp: number;
  weather: string;
  high: number;
  low: number;
  sunrise: string;
  sunset: string;
}

const cityDetails: { [id: number]: ICityDetails } = {
  1: {
    id: 1,
    name: 'New York',
    temp: 75,
    weather: 'Mostly Cloudy',
    high: 80,
    low: 60,
    sunrise: '6:22AM',
    sunset: '7:31PM',
  },
  2: {
    id: 2,
    name: 'Kyoto',
    temp: 73,
    weather: 'Partly Cloudy',
    high: 98,
    low: 78,
    sunrise: '5:28AM',
    sunset: '6:26PM',
  },
  3: {
    id: 3,
    name: 'Taipei',
    temp: 84,
    weather: 'Partly Cloudy',
    high: 91,
    low: 80,
    sunrise: '5:34AM',
    sunset: '6:14PM',
  },
};

export const CityApi = {
  getCities: (): Promise<ICity[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(cities);
      }, 500 + Math.random() * 1000);
    }),
  getCityDetails: ({ id }: { id: number }): Promise<ICityDetails> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        _.has(cityDetails, id) ? resolve(cityDetails[id]) : reject(new Error('404'));
      }, 500 + Math.random() * 1000);
    }),
};

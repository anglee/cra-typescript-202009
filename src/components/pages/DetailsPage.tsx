import React from 'react';
import { useParams } from 'react-router-dom';
import CityDetails from '../CityDetails';

const DetailsPage = () => {
  const { id } = useParams();
  return id ? <CityDetails id={id} /> : null;
};

export default DetailsPage;

import React from 'react';
import ReactJson from 'react-json-view';
import { Alert, Breadcrumb, Card, Spin } from 'antd';
import { Link } from 'react-router-dom';
import useCityDetails from '../hooks/useCityDetails';

interface IProps {
  id: number;
}

const CityDetails = ({ id }: IProps) => {
  const { cityDetails, isLoading, loadingError } = useCityDetails({
    id,
  });

  return (
    <Card
      title={
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/cities">Cities</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{cityDetails ? cityDetails.name : ''}</Breadcrumb.Item>
        </Breadcrumb>
      }
      style={{ width: 300, margin: '30px auto' }}
    >
      {isLoading ? (
        <Spin />
      ) : loadingError ? (
        <Alert type="error" message={`Failed to load: ${loadingError}`} />
      ) : (
        cityDetails && <ReactJson name="city" src={cityDetails} />
      )}
    </Card>
  );
};

export default CityDetails;

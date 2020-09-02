import React from 'react';
import { Button, Card, Spin } from 'antd';
import metrics from '../../utils/metrics';
import { CityApi, ICity } from '../../gensrc/api';
import CityList from '../CityList';

function ListPage() {
  const [unit, setUnit] = React.useState<'F' | 'C'>('F');
  React.useEffect(() => {
    metrics.log(`unit changed to ${unit}`);
  }, [unit]);

  const [cities, setCities] = React.useState<ICity[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    setIsLoading(true);
    CityApi.getCities()
      .then((ret) => {
        setCities(ret);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Card
      title="My cities"
      style={{ width: 300, margin: '30px auto' }}
      bodyStyle={cities.length ? { padding: 0 } : {}}
      extra={
        <Button type="link" onClick={() => setUnit(unit === 'F' ? 'C' : 'F')}>
          {unit === 'F' ? (
            <span>
              °C / <b>°F</b>
            </span>
          ) : (
            <span>
              <b>°C</b> / °F
            </span>
          )}
        </Button>
      }
    >
      <Spin spinning={isLoading}>
        <div>
          <CityList cities={cities} unit={unit} />
        </div>
      </Spin>
    </Card>
  );
}

export default ListPage;

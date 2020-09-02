import React from 'react';
import { CityApi, ICityDetails } from '../gensrc/api';

interface IProps {
  id: number;
}

interface IResult {
  cityDetails: ICityDetails | null;
  isLoading: boolean;
  loadingError: string | null;
}

const useCityDetails = ({ id }: IProps): IResult => {
  const [cityDetails, setCityDetails] = React.useState<ICityDetails | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState(null);

  // load city details from API when id changes
  React.useEffect(() => {
    if (!id) {
      setCityDetails(null);
    }
    setIsLoading(true);
    CityApi.getCityDetails({ id })
      .then((ret) => {
        setCityDetails(ret);
      })
      .catch((error) => {
        setLoadingError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return {
    cityDetails,
    isLoading,
    loadingError,
  };
};

export default useCityDetails;

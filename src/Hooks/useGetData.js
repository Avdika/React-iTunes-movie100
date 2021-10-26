import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {

    (async () => {
      setIsError(false);
      setIsLoading(true);

      await axios
        .get(`https://itunes.apple.com/us/rss/topmovies/limit=100/json`)
        .then(result => {
          setData(result.data.feed.entry);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsError(true);
          console.log('we have received an error: ', error);
        });
    })();
  }, [setData]);
  console.log('__datahook', data)
  return [{ data, isLoading, isError, Error }];
}

export default useGetData;

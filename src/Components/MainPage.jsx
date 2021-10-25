import React, { useContext, useEffect } from 'react';

import { Container } from '../Styles/SearchStyle';
import Movies from './Movies';
import Spinner from './Spinner';
import FilterForm from './FilterForm';
import useGetData from '../Hooks/useGetData';
import ErrorBlock from './ErrorBlock';
import { ActualData } from '../Context/index';

function Search() {
  const [{ data, isLoading, isError, Error }] = useGetData();
  const { actData, updateData } = useContext(ActualData);

  useEffect(() => {
    if(!actData.length){
    updateData(data);
    }
  }, [updateData, data, actData.length]);

  return (
    <Container>
      <FilterForm />
      {isLoading ? <Spinner /> : null}
      {isError
      ? <ErrorBlock errorInfo={Error} />
      : <Movies items={actData} />}
    </Container>
  )
}

export default Search;

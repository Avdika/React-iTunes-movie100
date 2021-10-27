import React, { useContext, useEffect } from 'react';

import Movies from './Movies';
import Spinner from './Spinner';
import SortingForm from './SortingForm';
import ErrorBlock from './ErrorBlock';
import FilterForm from './FilterForm';
import { ActualData } from '../Context/actualDataContext';
import useGetData from '../Hooks/useGetData';
import { Container } from '../Styles/SearchStyle';

function Search() {
  const [{ data, isLoading, isError, Error }] = useGetData();
  const { actData, updateData } = useContext(ActualData);

  useEffect(() => {
    if (!actData.length) {
      updateData(data);
    }
  }, [updateData, data, actData.length]);

  return (
    <Container>
      <SortingForm />
      <FilterForm
        placeholder='Enter Movie Name'
        buttonText='Filter'
      />
      {isLoading ? <Spinner /> : null}
      {isError
        ? <ErrorBlock errorInfo={Error} />
        : <Movies items={actData} />}
    </Container>
  )
}

export default Search;

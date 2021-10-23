import React, { useContext } from 'react';

import { Container } from '../Styled/SearchStyle';
import Movies from './Movies';
import Spinner from './Spinner';
import FilterForm from './FilterForm';
import useGetData from '../Hooks/useGetData';
import ErrorBlock from './ErrorBlock';
import { ActualData } from '../Context/index';

function Search() {
  const [{ data, isLoading, isError, Error }] = useGetData();
  const { actData, setActData } = useContext(ActualData);

  // setActData(data);

  return (
    <Container>
      <FilterForm />
      {isLoading ? <Spinner /> : null}
      {isError ? <ErrorBlock errorInfo={Error} /> : <Movies items={data} />}
    </Container>
  )
}

export default Search;

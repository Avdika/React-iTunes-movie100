import { useContext, useEffect } from 'react';

import Movies from './Movies';
import Spinner from './Spinner';
import SortingForm from './SortingForm';
import ErrorBlock from './ErrorBlock';
import FilterForm from './FilterForm';
import { ActualData } from '../Context/actualDataContext';
import useGetData from '../Hooks/useGetData';
import '../Styles/css/mainPage.css';

function Search() {
  const [{ data, isLoading, isError, Error }] = useGetData();
  const { actData, updateData } = useContext(ActualData);

  useEffect(() => {
    if (!actData.length) {
      updateData(data);
    }
  }, [updateData, data, actData.length]);

  return (
    <div className='mainPage'>
      <div className='movieManipulate'>
      <SortingForm />
      <FilterForm
        placeholder='Enter Movie Name'
        buttonText='Filter'
      />
      </div>
      {isLoading ? <Spinner /> : null}
      {isError
        ? <ErrorBlock errorInfo={Error} />
        : <Movies items={actData} />}
    </div>
  )
}

export default Search;

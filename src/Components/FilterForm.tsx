import React, { useState, useContext } from 'react';

import { ActualData } from '../Context/actualDataContext';
import '../Styles/css/movieManipulate.css';

type Props = {
  placeholder: string,
  buttonText: string
}

function SearchForm(props: Props) {
  const [value, setValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const { filter, updateFilter } = useContext(ActualData);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitValue = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (value === '') {
      !filter && setShowAlert(true);
      updateFilter(value);
    } else {
      setShowAlert(false);
      updateFilter(value);
    }
  };
  const clearFilter = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (value.length) {
      setValue('');
      updateFilter('');
    }
  }

  return (
    <div className='filtering'>
      <p>Filter Movies by Name</p>
      <form>
        <input
          type='text'
          placeholder={props.placeholder}
          value={value}
          onChange={changeValue}
          autoComplete='off'
        />
        <button className='filterButton' onClick={(event: React.FormEvent<HTMLInputElement>) => submitValue(event)}>
          {props.buttonText}
        </button>
        <button onClick={(event: React.FormEvent<HTMLInputElement>) => clearFilter(event)}>
          Clear filter
        </button>
        {showAlert ? <div data-testid='inputAllert'>Please enter movie name</div> : null}
      </form>
    </div>
  )
}

export default SearchForm;

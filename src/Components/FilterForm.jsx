import React, { useState, useContext } from 'react';

import { ActualData } from '../Context/actualDataContext';
import { Input, Button } from '../Styles/SearchFormStyle';

function SearchForm(props) {
  const [value, setValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const { filter, updateFilter } = useContext(ActualData);

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const submitValue = (event) => {
    event.preventDefault();
    if (value === '') {
      !filter && setShowAlert(true);
      updateFilter(value);
    } else {
      setShowAlert(false);
      updateFilter(value);
    }
  };
   const clearFilter = (event) => {
    event.preventDefault();
    if (value.length){
      setValue('');
      updateFilter('');
    }
   }

  return (
    <div>
      <form>
        <Input
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={changeValue}
          autoComplete="off"
        />
        <Button onClick={event => submitValue(event)}>
          {props.buttonText}
        </Button>
        <Button onClick={event => clearFilter(event)}>
          Clear filter
        </Button>
        {showAlert ? <div data-testid='inputAllert'>Please enter movie name</div> : null}
      </form>
    </div>
  )
}

export default SearchForm;

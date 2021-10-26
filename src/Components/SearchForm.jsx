import React, { useState, useContext } from 'react';

import { Input, Button } from '../Styles/SearchFormStyle';
import { ActualData } from '../Context/actualDataContext';

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
        <Button onClick={event => submitValue(event) }>
          {props.buttonText}
        </Button>
        {showAlert ? <div data-testid='inputAllert'>Please enter movie name</div> : null}
      </form>
    </div>
  )
}

export default SearchForm;

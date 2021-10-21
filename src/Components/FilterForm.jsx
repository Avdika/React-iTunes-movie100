import React from 'react'

import { Button } from '../Styled/SearchFormStyle';

const FilterForm = () => {
  return (
    <div>
      <p>Filters</p>
      <Button>Name</Button>
      <Button>Artist</Button>
      <Button>Genre</Button>
    </div>
  )
}

export default FilterForm;



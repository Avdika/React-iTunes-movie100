import React, { useContext } from 'react'

import { Button } from '../Styles/SearchFormStyle';
import { ActualData } from '../Context/index';

const FilterForm = () => {
  const { actData, updateData } = useContext(ActualData);

  const filterData = (e) => {
    const filterCriteria = e.target.title;

    if(filterCriteria === 'name'){
      let res = [...actData];
      res.sort((a,b) => (a['im:name'].label > b['im:name'].label) ? 1 : ((b['im:name'].label > a['im:name'].label) ? -1 : 0));
      updateData(res);
    }
    if(filterCriteria === 'artist'){
      let res = [...actData];
      res.sort((a,b) => (a["im:artist"].label > b["im:artist"].label) ? 1 : ((b["im:artist"].label > a["im:artist"].label) ? -1 : 0));
      updateData(res);
    }
    if(filterCriteria === 'genre'){
      let res = [...actData];
      res.sort((a,b) => (a.category.attributes.label > b.category.attributes.label) ? 1 : ((b.category.attributes.label > a.category.attributes.label) ? -1 : 0));
      updateData(res);
    }
  }

  return (
    <div>
      <p>Filters</p>
      <Button title='name' onClick={event => { filterData(event) }}>Name</Button>
      <Button title='artist' onClick={event => { filterData(event) }}>Artist</Button>
      <Button title='genre' onClick={event => { filterData(event) }}>Genre</Button>
    </div>
  )
}

export default FilterForm;

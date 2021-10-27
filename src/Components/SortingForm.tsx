import React, { useContext } from 'react'

import { ActualData } from '../Context/actualDataContext';
import { Button } from '../Styles/SearchFormStyle';

const SortingForm = () => {
  const { actData, updateData } = useContext(ActualData);

  const SortData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterCriteria = event.target.title;
    const res = [...actData];

    if(filterCriteria === 'name'){
      res.sort((a,b) => (a['im:name'].label > b['im:name'].label) ? 1 : ((b['im:name'].label > a['im:name'].label) ? -1 : 0));
      updateData(res);
    }
    if(filterCriteria === 'artist'){
      res.sort((a,b) => (a['im:artist'].label > b['im:artist'].label) ? 1 : ((b['im:artist'].label > a['im:artist'].label) ? -1 : 0));
      updateData(res);
    }
    if(filterCriteria === 'genre'){
      res.sort((a,b) => (a.category.attributes.label > b.category.attributes.label) ? 1 : ((b.category.attributes.label > a.category.attributes.label) ? -1 : 0));
      updateData(res);
    }
    if(filterCriteria === 'clear'){
      updateData([]);
    }
  }

  return (
    <div>
      <p>Sort Movies</p>
      <Button title='name' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event) }>Name</Button>
      <Button title='artist' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event) }>Artist</Button>
      <Button title='genre' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event) }>Genre</Button>
      <Button title='clear' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event) }>Clear sorting</Button>
    </div>
  )
}

export default SortingForm;

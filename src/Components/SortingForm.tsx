import React, { useContext } from 'react'

import { ActualData } from '../Context/actualDataContext';

const SortingForm = () => {
  const { actData, updateData } = useContext(ActualData);

  const SortData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterCriteria = event.target.title;
    const res = [...actData];

    if (filterCriteria === 'name') {
      res.sort((a, b) => (a['im:name'].label > b['im:name'].label) ? 1 : ((b['im:name'].label > a['im:name'].label) ? -1 : 0));
      updateData(res);
    }
    if (filterCriteria === 'artist') {
      res.sort((a, b) => (a['im:artist'].label > b['im:artist'].label) ? 1 : ((b['im:artist'].label > a['im:artist'].label) ? -1 : 0));
      updateData(res);
    }
    if (filterCriteria === 'genre') {
      res.sort((a, b) => (a.category.attributes.label > b.category.attributes.label) ? 1 : ((b.category.attributes.label > a.category.attributes.label) ? -1 : 0));
      updateData(res);
    }
    if (filterCriteria === 'clear') {
      updateData([]);
    }
  }

  return (
    <div className='sorting'>
      <p>Sort Movies by Category</p>
      <button title='name' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event)}>Name</button>
      <button title='artist' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event)}>Artist</button>
      <button title='genre' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event)}>Genre</button>
      <button title='clear' onClick={(event: React.ChangeEvent<HTMLInputElement>) => SortData(event)}>Clear sorting</button>
    </div>
  )
}

export default SortingForm;

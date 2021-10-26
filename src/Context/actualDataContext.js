import { createContext, useState, useMemo } from 'react'

export const ActualData = createContext({
  actData: [],
  updateData: () => {},
  filter: '',
  updateFilter: () => {}
});

const ActualDataProvider = (props) => {
  const [actData, setActData] = useState([]);
  const [filter, setFilter] = useState('')

  const value = useMemo(() => ({
    actData,
    updateData: newData => {
      setActData(newData);
    },
    filter,
    updateFilter: newFilter => {
      setFilter(newFilter);
    },
  }), [actData, filter]);

  return (
    <ActualData.Provider value={value}>
      {props.children}
    </ActualData.Provider>
  )
}

export default ActualDataProvider;

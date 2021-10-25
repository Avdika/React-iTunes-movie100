import { createContext, useState, useMemo } from 'react'

export const ActualData = createContext({
  actData: [],
  updateData: () => {}
});

const ActualDataProvider = (props) => {
  const [actData, setActData] = useState([]);

  const value = useMemo(() => ({
    actData,
    updateData: newData => {
      setActData(newData);
    }
  }), [actData]);

  return (
    <ActualData.Provider value={value}>
      {props.children}
    </ActualData.Provider>
  )
}

export default ActualDataProvider;

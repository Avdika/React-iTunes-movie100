import { createContext, useState, useMemo } from 'react';

export type Datatype = {
  onClick: () => void,
  image: string,
  title: string,
  genre: string,
  artist: string,
  releasedate: Date,
  ['im:name']: {
    label: string
  },
  ['im:artist']: {
    label: string
  },
  ['im:releaseDate']: {
    attributes: {
      label: Date
    }
  },
  category: {
    attributes: {
      label: string
    }
  },
  ['im:image']: {
    label: string
  }[],
  ['im:rentalPrice']: {
    label: string
  },
  rights: {
    label: string
  },
  link: {
    attributes: {
      type: string,
      href: string
    }
  }[],
  summary: {
    label: string
  },
  ['im:price']: {
    label: string
  }
}

interface AppContextInterface {
    actData: Datatype[],
    updateData: (data: Datatype[]) => void,
    filter: string,
    updateFilter: Function
}

export const ActualData = createContext<AppContextInterface>({
  actData: [],
  updateData: () => {},
  filter: '',
  updateFilter: () => {}
});

type Props = {
  children: any
}

const ActualDataProvider = (props: Props) => {
  const [actData, setActData] = useState<Datatype[]>([]);
  const [filter, setFilter] = useState('')

  const value = useMemo(() => ({
    actData,
    updateData: (newData: Datatype[]) => {
      setActData(newData);
    },
    filter,
    updateFilter: (newFilter: string) => {
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

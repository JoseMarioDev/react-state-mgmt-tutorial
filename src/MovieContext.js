import React,{ useState, createContext } from 'react';

export const MovieContext = createContext();


export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'harry potter',
      price: '$10',
      id: 23124
    },
    {
      name: 'game of thrones ',
      price: '$10',
      id: 2566132
    },
    {
      name: 'inception',
      price: '$10',
      id: 23524
    }
  ])
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
      
    </div>
  )
}

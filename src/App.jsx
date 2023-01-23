import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import {motion, AnimatePresence} from 'framer-motion';

function App() {

  const [popular, setPopular]=useState([]);
  const [filtered, setFiltered]=useState([]);
  const [activeGenre, setActiveGenre]=useState(0);

  useEffect (()=>{
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1b8656ac10f2fd3553ff00bcccc040c8');
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results)
  }
   
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
       <motion.div Layout className="popular-movies">
        <AnimatePresence>
        {filtered.map((movie) =>{
          return <Movie key={movie.id} movie={movie} />;
        })}
        </AnimatePresence>
       </motion.div>
    </div>
  );
}

export default App;

import {motion} from 'framer-motion';

function Movie ({movie}){
    return (  
        <motion.div Layout animate={{ opacity : 2 }} initial={{ opacity : 0 }} exit={{ opacity: 0 }}  Layout>
            <h2>{movie.title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="movie" />
        </motion.div>
    );
}
 
export default Movie;
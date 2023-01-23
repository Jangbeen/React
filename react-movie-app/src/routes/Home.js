import { useState, useEffect } from "react";
import Movie from "../componenets/Movie"
import Navbar from "../componenets/Navbar";
import styles from "./Home.module.css"

function Home() {
    const [loading,setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
      const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_ratings=9.0&sort_by=year");
      const json = await response.json();
      setMovies(json.data.movies)
      setLoading(false)
    }
  
    useEffect(() => {
      getMovies();
    }, [])
  
    return (
      <div>
        {loading? <h1>Loading ... </h1> :

        <div className={styles.basic}>
          <Navbar />
          {movies.map((movie, index) => 
            <Movie
            key={movie.id} 
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}
            index={index+1}
            />
          )}    
        </div>   
        }
      </div>
    );
}

export default Home;
import React, { useEffect, useState } from "react";
import classes from "./Row.module.css";
import instance from "../../axios/axios";
import YouTube from 'react-youtube';
import Backdrop from '../UI/Backdrop';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailer,setTrailer]=useState('');

  useEffect(() => {
    const fetchDataHandler = async () => {
      const response = await instance.get(props.fetchUrl);

      setMovies(response.data.results);

    };
    fetchDataHandler();
  }, [props.fetchUrl]);

  const opts={
      height:'390',
      width:'800',
      playerVars:{
          autoplay:1
      },
  }

  const handleClick= async (movie)=>{
        const url=await movieTrailer(movie?.name || movie?.title ||  "");
        console.log(url);
    if(url){
        const urlParams=new URLSearchParams(new URL(url).search);
        const urlMovie=await urlParams.get('v');
        console.log(urlMovie);
        setTrailer(urlMovie);
    }
        setTrailer('Ob4NC4D6zTU');
    console.log('trial-1');

  }

  return (
    <React.Fragment>
        {trailer &&  <Backdrop>
            <div style={{margin:'150px 280px'}}>
                <button className={classes.close} onClick={e=>setTrailer('')}>close</button>
            <YouTube videoId={trailer} opts={opts} />

            </div>
        </Backdrop> }
      <div className={classes.container}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes["movie-container"]}>
          {movies.map((item) => {
            return (
              <img
                onClick={e=>handleClick(item)}
                className={classes.poster}
                style={{ maxHeight: `${props.isLarge ? "300px" : "180px"}` }}
                src={`${base_url}${item["poster_path"]}`}
                alt={item.title}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Row;

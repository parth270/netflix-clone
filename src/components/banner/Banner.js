import React, { useEffect, useState } from "react";
import instance from "../../axios/axios";
import classes from "./Banner.module.css";
import requests from "../../request/request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchDataHandler = async () => {
      const response = await instance.get(requests.fetchNetflix);
      const Movie = response.data.results;
      console.log(Movie);
      setMovie(Movie[Math.floor(Math.random() * 19)]);
    };
    fetchDataHandler();
  }, []);

  const truncate=(str,n)=>{
      return str?.length>n ? str.substr(0,n-1)+"...":str
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className={classes["banner-contents"]}>
        <h1 className={classes.title}>
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className={classes.buttons}>
          <button className={classes['button']} >Play</button>
          <button className={classes['button']} >My list</button>
        </div>
        <h1 className={classes.desc}>{truncate(movie.overview,150)}</h1>
      </div>
      <div className={classes.fade} />
    </header>
  );
};

export default Banner;

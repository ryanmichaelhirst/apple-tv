import React, { Fragment } from "react";
import CaptionCard from "../cards/CaptionCard";
import { movies } from "../../data";
import Column from "../wrappers/Column";

const MovieSlider = () => {
    return (
        <Fragment>
            {movies.map(movie => {
                return (
                    <Column style={{ width: 250 }} key={movie.caption}>
                        <CaptionCard
                            className="card card-lg"
                            img={movie.img} 
                            caption={movie.caption} 
                            onClick={() => window.open(`${movie.link}`, '_blank')}
                        />
                    </Column>
                ); 
            })}
        </Fragment>
    );
};

export default MovieSlider;
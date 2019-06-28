import React, { Fragment } from "react";
import CaptionCard from "../cards/CaptionCard";
import { tvShows } from "../../data";
import Column from "../wrappers/Column";

const TvSlider = () => {
    return (
        <Fragment>
            {tvShows.map(tvShow => {
                return (
                    <Column className="col-4" key={tvShow.caption}>
                        <CaptionCard 
                            className="card card-lg"
                            img={tvShow.img} 
                            caption={tvShow.caption} 
                            onClick={() => window.open(`${tvShow.link}`, '_blank')}
                        />
                    </Column>
                );
            })}
        </Fragment>
    );
};

export default TvSlider;
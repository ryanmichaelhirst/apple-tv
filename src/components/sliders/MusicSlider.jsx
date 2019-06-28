import React, { Fragment } from "react";
import { songs } from "../../data";
import CaptionCard from "../cards/CaptionCard";
import Column from "../wrappers/Column";

const MusicSlider = () => {
    return (
        <Fragment>
            {songs.map(song => {
                const caption = `${song.title} by ${song.artist}`;

                return (
                    <Column style={{ width: 250 }} key={song.title}>
                        <CaptionCard
                            className="card card-lg"
                            img={song.img} 
                            caption={caption} 
                            key={song.title}
                            onClick={() => window.open(`${song.link}`, '_blank')}
                        />
                    </Column>
                );
            })}
        </Fragment>
    );
};

export default MusicSlider;
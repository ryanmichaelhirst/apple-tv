import React, { Fragment } from "react";
import CaptionCard from "../cards/CaptionCard";
import { songs } from "../../data";
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
                            onClick={() => window.open(`${song.link}`, "_blank")}
                        />
                    </Column>
                )
            })}
        </Fragment>
    );
};

export default MusicSlider;
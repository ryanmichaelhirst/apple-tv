import React from "react";
import MovieSlider from "./MovieSlider";
import TvSlider from "./TvSlider";
import AppStoreSlider from "./AppStoreSlider";
import MusicSlider from "./MusicSlider";

const MediaSlider = ({ mediaType }) => {
    if (mediaType === "movie")
        return <MovieSlider />;
    else if (mediaType === "tv")
        return <TvSlider />;
    else if (mediaType === "app")
        return <AppStoreSlider />;
    else if (mediaType === "music")
        return <MusicSlider />;
    else if (mediaType === "photo")
        return null;
    else
        return <p>Oh no! We don't have a slider for that type</p>;
};

MediaSlider.defaultProps = {
    mediaType: null
};

export default MediaSlider;
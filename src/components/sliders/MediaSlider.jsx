import React from "react";
import TvSlider from "./TvSlider";
import AppStoreSlider from "./AppStoreSlider";
import MovieSlider from "./MovieSlider";
import MusicSlider from "./MusicSlider";

const MediaSlider = ({ mediaType }) => {
    if (mediaType === "tv")
        return <TvSlider />;
    else if (mediaType === "movie")
        return <MovieSlider />;
    else if (mediaType === "app")
        return <AppStoreSlider />;
    else if (mediaType === "music")
        return <MusicSlider />;
    else if (mediaType === "photo")
        return null;
    else
        return <p>Oh no! We don't support that media type yet!</p>;
};

MediaSlider.defaultProps = {
    mediaType: null
};

export default MediaSlider;
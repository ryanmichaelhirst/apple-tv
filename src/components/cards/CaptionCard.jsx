import React, { useState, Fragment } from "react";

const CaptionCard = ({ caption, className, img, onClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Fragment>
            <div 
                className={className}
                onClick={onClick}
                style={{ backgroundImage: `url("${img}")`}} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            <p className="card-caption" style={{ color: hovered ? "white" : "transparent" }}>
                {caption}
            </p>
        </Fragment>
    );
};

CaptionCard.defaultProps = {
    caption: "your caption!",
    className: "",
    img: null,
    onClick: null
};

export default CaptionCard;
import React, { useRef, useEffect, useState } from "react";
import AnimationWrapper from "../wrappers/AnimationWrapper";
import CaptionCard from "./CaptionCard";
import history from "../../history";

const AppCard = ({ animate, caption, img, onChange, type }) => {
    const ref = useRef(null);
    const [direction, setDirection] = useState("topRight");

    useEffect(() => {
       const setDimensions = () => {
           const y = ref.current.offsetTop > window.innerHeight ? "bot" : "top";
           const x = (ref.current.offsetLeft * 2) < window.innerWidth ? "Left" : "Right";
           setDirection(y + x);
       };
       setDimensions();
       window.addEventListener("resize", setDimensions);
       // clean up after this effect
        return () => {
            window.removeEventListener("resize", setDimensions);
        };
    }, [ref]);

    const onClick = () => {
        if (type) {
            onChange(type);
        } else {
            onChange();
            setTimeout(() => {
                history.push({ pathname: '/app', state: { img, caption } });
            }, 700);
        }
    };

    return (
        <AnimationWrapper
            animate={animate}
            ref={ref}
            direction={direction}
            className="animated-col"
        >
           <CaptionCard
               className="card card-sm"
               onClick={onClick}
               img={img}
               caption={caption}
           />
        </AnimationWrapper>
    );
};

AppCard.defaultProps = {
    animate: false,
    caption: "your caption!",
    img: null,
    onChange: null,
    type: null
};

export default AppCard;
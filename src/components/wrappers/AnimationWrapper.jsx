import styled, { keyframes } from "styled-components";

const topLeft = "-100px, -100px";
const topRight = "100px, -100px";
const botLeft = "-100px, 100px";
const botRight = "100px, 100px";

const getCoords = direction => {
    if (direction === "topLeft")
        return topLeft;
    else if (direction === "topRight")
        return topRight;
    else if (direction === "botLeft")
        return botLeft;
    else if (direction === "botRight")
        return botRight;
};

const fadeIn = keyframes`
    from {
        transform: scale(.25);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const fadeOut = coords => keyframes`
    from {
        transform: scale(1);
        opacity: 1;
    }
    to {
        transform: translate(${coords}) scale(.25);
        opacity: 0;
    }
`;

const Animate = styled.div`
    display: inline-block;
    position: relative;
    visibility: ${props => props.animate ? 'hidden' : 'visible'}
    animation: ${props => props.animate ? fadeOut(getCoords(props.direction)) : fadeIn} 1s linear;
`;

Animate.defaultProps = {
    animate: false,
    direction: "topLeft"
};

export default Animate;
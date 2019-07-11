import React from "react";

const Msg = ({ msg }) => {
    const style = {
        display: "inline-block",
        padding: "10px 20px 10px 20px",
        borderRadius: 3,
        boxShadow: "rgba(40, 200, 200, 0.5) 0px 14px 28px, " +
            "rgba(255, 255, 255, 0.22) 0px 10px 10px",
        backgroundColor: "white",
        color: "#837dff"
    };

    return (
        <div style={style}>
            <p>{msg}</p>
        </div>
    )
};

Msg.defaultProps = {
    msg: "your msg!"
};

export default Msg;
import React from "react";

const Row = ({ children, className, style }) => {
    return (
        <div className={`row ${className}`} style={style}>
            {children}
        </div>
    );
};

Row.defaultProps = {
    children: null,
    className: "",
    style: {}
};

export default Row;
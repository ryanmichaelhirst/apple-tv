import React from "react";

const Column = ({ children, className, style }) => {
    return (
        <div className={`col ${className}`} style={style}>
            {children}
        </div>
    );
};

Column.defaultProps = {
    children: null,
    className: "",
    style: {}
};

export default Column;
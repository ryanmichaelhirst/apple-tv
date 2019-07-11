import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CaptionCard from "../cards/CaptionCard";
import Msg from "../wrappers/Msg";
import Row from "../wrappers/Row";
import Column from "../wrappers/Column";
import { users } from "../../data";

const rowStyle = {
    textAlign: "center",
    marginTop: 20
};

const AppPageContainer = ({ location: { state: { img, caption } } }) => {
    const [isLoading, setLoading] = useState(true);
    const [showMsg, setShowMsg] = useState(false);
    const [bgColor, setBgColor] = useState("#1d1919");

    useEffect(() => {
        const setColor = color => {
            document.documentElement.style.setProperty("--primary-background", color);
            setBgColor(color);
        };
        setColor(bgColor);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
          setColor("#d9e3eb");
        };
    }, [bgColor]);

    const onClick = () => setShowMsg(true);

    if (isLoading) {
        return (
            <div className="full-bg" style={{ backgroundImage: `url("${img}"`}}>
                <div className="loader" />
            </div>
        )
    }

    return (
        <div className="app-page">
            <Link to="/" className="back-arrow">
                &#8592;
            </Link>

            <p style={{ textAlign: "center", fontSize: 40 }}>
                Who's watching {caption}?
            </p>

            <Row style={rowStyle}>
                {users.map(user => {
                    return (
                        <Column className="col-8" key={user.caption}>
                            <CaptionCard
                                className="card user-card"
                                onClick={onClick}
                                img={user.img}
                                caption={user.caption}
                            />
                        </Column>
                    );
                })}
            </Row>

            <Row style={rowStyle}>
                {showMsg ? <Msg msg="Thank you for logging in!" /> : null}
            </Row>
        </div>
    )
};

AppPageContainer.defaultProps = {
    location: {
        state: {
            img: null,
            caption: "your caption!"
        }
    }
};

export default AppPageContainer;
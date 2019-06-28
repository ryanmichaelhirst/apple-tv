import React, { useState } from "react";
import Row from "../wrappers/Row";
import AppCard from "../cards/AppCard";
import MediaSlider from "../sliders/MediaSlider";
import { apps1, apps2, apps3, apps4, apps5 } from "../../data";
import PhotoBackground from "../../res/background/photos.png";
import Column from "../wrappers/Column";

const style = {
    backgroundImage: `url("${PhotoBackground}")`,
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat"
};

const MainContainer = () => {
    const [mediaType, setMediaType ] = useState("tv");
    const [animate, setAnimate] = useState(null);

    const mediaHandler = type => setMediaType(type);

    const clickHandler = () => setAnimate(true);

    return (
        <div>
            <Row className="scrollable-row" mediaType={mediaType} style={mediaType === "photo" ? style : {}}>
                <MediaSlider mediaType={mediaType} />
            </Row>

            <Row className="highlight-row">
                <div className="centered-container">
                    {apps1.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard img={app.img} onChange={mediaHandler} type={app.type} caption={app.caption} />
                            </Column>
                        )
                    })}
                </div>
            </Row>
            
            <div className="centered-container">     
                <Row>
                    {apps2.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard img={app.img} onChange={clickHandler} animate={animate} caption={app.caption} />
                            </Column>
                        )
                    })}
                </Row>

                <Row>
                    {apps3.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard img={app.img} onChange={clickHandler} animate={animate} caption={app.caption} />
                            </Column>
                        )
                    })}
                </Row>

                <Row>
                    {apps4.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard img={app.img} onChange={clickHandler} animate={animate} caption={app.caption} />
                            </Column>
                        )
                    })}
                </Row>

                <Row>
                    {apps5.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard img={app.img} onChange={clickHandler} animate={animate} caption={app.caption} />
                            </Column>
                        )
                    })}
                </Row>
            </div>
        </div>
    );
};

export default MainContainer;
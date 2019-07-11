import React, { useState } from "react";
import Row from "../wrappers/Row";
import Column from "../wrappers/Column";
import AppCard from "../cards/AppCard";
import MediaSlider from "../sliders/MediaSlider";
import PhotoImg from "../../res/photos/photos.png";
import { apps1, apps2, apps3, apps4, apps5 } from "../../data";

const style = {
    backgroundImage: `url("${PhotoImg}")`,
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat"
};

const HomePageContainer = () => {
    const [mediaType, setMediaType] = useState("tv");
    const [animate, setAnimate] = useState(null);

    const mediaHandler = type => setMediaType(type);
    const clickHandler = () => setAnimate(true);

    return (
        <div>
            <Row className="scrollable-row" style={mediaType === "photo" ? style : {}}>
                <MediaSlider mediaType={mediaType} />
            </Row>

            <Row className="highlight-row">
                <div className="centered-container">
                    {apps1.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard
                                    img={app.img}
                                    onChange={mediaHandler}
                                    type={app.type}
                                    caption={app.caption}
                                />
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
                                <AppCard
                                    animate={animate}
                                    img={app.img}
                                    onChange={clickHandler}
                                    type={app.type}
                                    caption={app.caption}
                                />
                            </Column>
                        )
                    })}
                </Row>
            </div>

            <div className="centered-container">
                <Row>
                    {apps3.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard
                                    animate={animate}
                                    img={app.img}
                                    onChange={clickHandler}
                                    type={app.type}
                                    caption={app.caption}
                                />
                            </Column>
                        )
                    })}
                </Row>
            </div>

            <div className="centered-container">
                <Row>
                    {apps4.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard
                                    animate={animate}
                                    img={app.img}
                                    onChange={clickHandler}
                                    type={app.type}
                                    caption={app.caption}
                                />
                            </Column>
                        )
                    })}
                </Row>
            </div>

            <div className="centered-container">
                <Row>
                    {apps5.map(app => {
                        return (
                            <Column className="col-5" key={app.caption}>
                                <AppCard
                                    animate={animate}
                                    img={app.img}
                                    onChange={clickHandler}
                                    type={app.type}
                                    caption={app.caption}
                                />
                            </Column>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
};

export default HomePageContainer;
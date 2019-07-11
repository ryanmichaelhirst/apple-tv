import React, { Fragment } from "react";
import CaptionCard from "../cards/CaptionCard";
import { appStores } from "../../data";
import Column from "../wrappers/Column";

const AppStoreSlider = () => {
    return (
        <Fragment>
            {appStores.map(appStore => {
                return (
                    <Column style={{ width: "60%" }} key={appStore.caption}>
                        <CaptionCard
                            className="card card-lg"
                            img={appStore.img}
                            caption={appStore.caption}
                        />
                    </Column>
                );
            })}
        </Fragment>
    );
};

export default AppStoreSlider;
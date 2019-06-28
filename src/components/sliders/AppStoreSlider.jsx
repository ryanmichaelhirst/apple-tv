import React, { Fragment } from "react";
import CaptionCard from "../cards/CaptionCard";
import { appStores } from "../../data";
import Column from "../wrappers/Column";

const AppStoreSlider = () => {
    return (
        <Fragment>
            {appStores.map(obj => {
                return (
                    <Column style={{ width: "60%" }} key={obj.caption}>
                        <CaptionCard
                            className="card card-lg"
                            img={obj.img} 
                            caption={obj.caption} 
                        />
                    </Column>
                );
            })}
        </Fragment>
    );
};

export default AppStoreSlider;
import React from 'react';
import WhatIsOn from "../components/WhatIsOn";
import Survey from "../components/Survey";
import CarerSession from "../components/CarerSession";

export const Home = () => {
    return (
        <>
            <CarerSession />
            <Survey />
            <WhatIsOn />
        </>
    );
}

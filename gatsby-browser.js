import React from "react";
import {MainTemplate} from "templates/MainTemplate";
// import {MainTemplate} from "./src/components/MainTemplate";

export const wrapPageElement = ({element, props}) =>(
    <MainTemplate {...props}>
        {element}
    </MainTemplate>
)
import React from "react";
import OneProdukt from "templates/OneProduct/OneProdukt";
import {graphql} from "gatsby";

const Tempor = ({data}) =>(
<OneProdukt data = {data}/>
);


export const query = graphql`
    query {
        product1: file(relativePath: {regex: "product\/product1.jpg/"}) {
            publicURL
        },
        avatar: file(relativePath: {regex: "product\/avatar.png/"}) {
            publicURL
        },
    }`;



export default Tempor;
import React, {useState,useEffect} from "react"
import styled from "styled-components";
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { graphql } from 'gatsby';
import {
    EmptyState, FiltersList, Gallery, IntroSection, MainWrapperImmobilien
} from 'assets/styles/pages/immobilien.styles';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

const Immobilien = ({ data } ) => {
// let data2=[];
const [data200, setData200] = useState([]);
    return (
        <MainWrapperImmobilien>
            <IntroSection>
                <HighlightedHeading>Immobilienangebote.</HighlightedHeading>
                <p>
                    Wir sind ständig auf der Suche nach neuen Immobilienangeboten. Wählen Sie die Art der Immobilie, die
                    Sie interessiert.
                </p>
            </IntroSection>
            <FiltersList>
                <li>Mieszkanie</li>
                <li>Dom</li>
                <li>Działka</li>
            </FiltersList>
            {console.log(data200)}
            {useEffect(()=>{
                setData200(Object.values(data))
            },[data])

               }
            {console.log(data200)}

            {(!data200.length)
                ? (
                    <EmptyState>
                        <h2>Brak ofert</h2>
                        <h3>Już niebawem nowe oferty od Modern Studio</h3>
                    </EmptyState>)
                : (<Gallery>
                    <Thumbnail imageSource={data.immo1.publicURL}/>
                    <Thumbnail imageSource={data.immo2.publicURL}/>
                    <Thumbnail imageSource={data.immo3.publicURL}/>
                    <Thumbnail imageSource={data.immo4.publicURL}/>
                </Gallery>)
            }
        </MainWrapperImmobilien>
    );
}

export const query = graphql`
    query {
        immo1: file(relativePath: {regex: "/immobilien\/immo1.jpg/"}) {
            publicURL
        },
        immo2: file(relativePath: {regex: "/immobilien\/immo2.jpg/"}) {
            publicURL
        },
        immo3: file(relativePath: {regex: "/immobilien\/immo3.jpg/"}) {
            publicURL
        },
        immo4: file(relativePath: {regex: "/immobilien\/immo4.jpg/"}) {
            publicURL
        },
    }`;


export default Immobilien;
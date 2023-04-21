import React, {useState,useEffect} from "react"
import { Link } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { graphql } from 'gatsby';
import {
    EmptyState, FiltersList, Gallery, IntroSection, MainWrapperImmobilien
} from 'assets/styles/pages/immobilien.styles';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

const Immobilien = ({data: {allContentfulImmoEinAngebot: {nodes: immos}}}) => {
    // const [data200, setData200] = useState([]);
    console.log(immos)
    console.log(immos[0].gallery[0].url)
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
                <Link to="/immobilien/musterstrasse-5/"><li>Immobilien</li></Link>
                <Link to="/home-staging"><li>Home Staging</li></Link>
            </FiltersList>
            {/*{useEffect(()=>{*/}
            {/*    setData200(Object.values(immos))*/}
            {/*},[])*/}
            {/*   }*/}

            {!(immos.length)
                ? (
                    <EmptyState>
                        <h2>keine Angebote</h2>
                        <h3>Neue Angebote von SeilerImmobilien folgen in Kürze</h3>
                    </EmptyState>)
                : (<Gallery>
                    {immos.map(({gallery, address, title, id})=>{
                        return(
                            // <Thumbnail url={immos[i].gallery[0].url} address={immos[i].address}/>
                            // <Thumbnail url={immo.gallery[0].url} address={immo.address}/>
                            <Thumbnail url={gallery[0].url} address={address} titel={title} id={id}/>
                        )
                    })}

                    {/*<Thumbnail imageSource={data.immo2.publicURL}/>*/}
                    {/*<Thumbnail imageSource={data.immo3.publicURL}/>*/}
                    {/*<Thumbnail imageSource={data.immo4.publicURL}/>*/}
                </Gallery>)
            }
        </MainWrapperImmobilien>
    );
}

// export const query = graphql`
//     query {
//         immo1: file(relativePath: {regex: "/immobilien\/immo1.jpg/"}) {
//             publicURL
//         },
//         immo2: file(relativePath: {regex: "/immobilien\/immo2.jpg/"}) {
//             publicURL
//         },
//         immo3: file(relativePath: {regex: "/immobilien\/immo3.jpg/"}) {
//             publicURL
//         },
//         immo4: file(relativePath: {regex: "/immobilien\/immo4.jpg/"}) {
//             publicURL
//         },
//     }`;
export const query = graphql`
    query MyQuery {
        allContentfulImmoEinAngebot {
            nodes {
                address
                areaM2
                description {
                    description
                }
                gallery {
                    url
                }
                id
                kontakt
                numberOfRooms
                title
                typeOfProperty
                condition
            }
        }
    }
`;

export default Immobilien;
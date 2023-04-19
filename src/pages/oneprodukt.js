import React from 'react';

import AreaIcon from 'assets/icons/area.svg';
import AvailabilityIcon from 'assets/icons/availability.svg';
import OfferTypeIcon from 'assets/icons/offer-type.svg';
import RoomsIcon from 'assets/icons/rooms.svg';
import BuildingTypeIcon from 'assets/icons/building-type.svg';
import {
    Address,
    Gallery, OfferDescription, OfferDetailsList,
    OfferTitle,
    StyledContentWrapper,
} from 'templates/OneProduct/OneProdukt.styles';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import {HighlightedHeading} from 'components/HighlightedHeading/HighlightedHeading';
import {graphql} from "gatsby";

// const OneProdukt = ({data: {allContentfulImmoEinAngebot: {nodes: immos}}}) => (
// const OneProdukt = ({data: {avatar, immos: {nodes:immos}}}) => (
const OneProdukt = (id) => (
    <StyledContentWrapper>
    {/*{console.log(immos)*/}
    {/*immos = immos.filter((immo)=>)*/}
    {/*}*/}
        {console.log(id)}
        <OfferTitle>
            <Address>Musterstraße 51</Address>
            <HighlightedHeading>GRÜN UND GEHOBEN WOHNEN – 2-ZIMMER-WOHNUNG MIT SONNENDECK-BALKON</HighlightedHeading>
        </OfferTitle>
        <Gallery>

            {/*<img src={immos.gallery[0].url} alt={""}/>*/}

        </Gallery>
        <OfferDescription>
            Sie wohnen in diesem gut geschnittenen Zwei-Zimmer-Appartement allein oder mit geschickter Einrichtung des Schlafzimmers komfortabel zu zweit. Der Boden aus Echtholzparkett bedeckt die gesamte Wohnfläche und ist mit einer...
        </OfferDescription>
        <OfferDetailsList>
            <li>
                <BuildingTypeIcon />
                <div>
                    <p>Objekttyp:</p>
                    <p>Wohnung</p>
                </div>
            </li>
            <li>
                <RoomsIcon />
                <div>
                    <p>Zimmer:</p>
                    <p>4+2 Badezimmer </p>
                </div>
            </li>
            <li>
                <AvailabilityIcon />
                <div>
                    <p>Verfügbar ab:</p>
                    <p>Oktober 2023</p>
                </div>
            </li>
            <li>
                <AreaIcon />
                <div>
                    <p>Wohnfläche:</p>
                    <p>95 m2</p>
                </div>
            </li>
            <li>
                <OfferTypeIcon />
                <div>
                    <p>Zustand:</p>
                    <p>gepflegt</p>
                </div>
            </li>
        </OfferDetailsList>
        {/*<ContactDetails avatarImages={avatar.publicURL} />*/}
    </StyledContentWrapper>
);

// export const query = graphql`
//     query MyQuery {
//         immos: allContentfulImmoEinAngebot {
//             nodes {
//                 address
//                 areaM2
//                 description {
//                     description
//                 }
//                 gallery {
//                     url
//                 }
//                 id
//                 kontakt
//                 numberOfRooms
//                 title
//                 typeOfProperty
//                 condition
//             }
//         },
//         avatar: file(relativePath: {regex: "/product\/avatar.png/"}) {
//             publicURL
//         },
//     }
// `;

export default OneProdukt;
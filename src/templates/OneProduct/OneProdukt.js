import React from 'react';
import { graphql } from 'gatsby';
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
} from './OneProdukt.styles';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import {HighlightedHeading} from 'components/HighlightedHeading/HighlightedHeading';

const OneProdukt = ({data:{avatar, immos}}) => (
    <StyledContentWrapper>
        <OfferTitle>
            <Address>{immos.address}</Address>
            <HighlightedHeading>{immos.title}</HighlightedHeading>
        </OfferTitle>
        <Gallery>
            {console.log(immos)}

            <img src={immos.gallery[0].url} alt={""}/>

        </Gallery>
        <OfferDescription>
            {immos.description.description}
        </OfferDescription>
        <OfferDetailsList>
            <li>
                <BuildingTypeIcon />
                <div>
                    <p>Objekttyp:</p>
                    <p>{immos.typeOfProperty}</p>
                </div>
            </li>
            <li>
                <RoomsIcon />
                <div>
                    <p>Zimmer:</p>
                    <p>{immos.numberOfRooms}</p>
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
                    <p>{immos.areaM2} m2</p>
                </div>
            </li>
            <li>
                <OfferTypeIcon />
                <div>
                    <p>Zustand:</p>
                    <p>{immos.condition}</p>
                </div>
            </li>
        </OfferDetailsList>
        <ContactDetails avatarImages={avatar.publicURL} />
    </StyledContentWrapper>
);

export const query = graphql`
    query MyQuery($id: String)  {
        immos: contentfulImmoEinAngebot(id: {eq: $id}) {
            address
            areaM2
            condition
            description {
                description
            }
            id
            gallery {
                url
            }
            kontakt
            title
            typeOfProperty
            numberOfRooms
        },
        avatar: file(relativePath: {regex: "/product\/avatar.png/"}) {
            publicURL
        },
    }`;

export default OneProdukt;
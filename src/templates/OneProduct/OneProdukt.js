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
} from './OneProdukt.styles';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import {HighlightedHeading} from 'components/HighlightedHeading/HighlightedHeading';

const OneProdukt = ({data}) => (
    <StyledContentWrapper>
        <OfferTitle>
            <Address>Musterstraße 51</Address>
            <HighlightedHeading>GRÜN UND GEHOBEN WOHNEN – 2-ZIMMER-WOHNUNG MIT SONNENDECK-BALKON</HighlightedHeading>
        </OfferTitle>
        <Gallery>

<img src={data.product1.publicURL} alt={""}/>

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
        <ContactDetails avatarImages={data.avatar.publicURL} />
    </StyledContentWrapper>
);



export default OneProdukt;
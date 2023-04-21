import React from 'react';
import { graphql } from 'gatsby';
import {
    ContactContentWrapper,
    ContactInfoWrapper,
    ContactPhoto,
} from 'assets/styles/pages/kontakt.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import PhoneIcon from 'assets/icons/phone.svg';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Kontakt = ({ data }) => (
    <ContactContentWrapper>
        <ContactInfoWrapper>
            <HighlightedHeading>Kontakt</HighlightedHeading>
            <p>
                Haben Sie Fragen oder konkrete Wünsche? Rufen Sie uns einfach an, schreiben Sie uns eine E-Mail oder vereinbaren Sie weiter unten einen Rückruftermin.
            </p>
            <a href="+49 176 000000">
                <PhoneIcon />
                Telefon:  +49 176 000000
            </a>
        </ContactInfoWrapper>
        <ContactForm />
        <ContactPhoto
            color="steel"
            offset="2000"
            position="bottomLeft"
            size={(!(typeof window === "undefined") &&(window.innerWidth>1100)) ? "100px" : "0px"}
            distance="30px"
            imageSource={data.kontakt.publicURL}
        />
    </ContactContentWrapper>
);

export const query = graphql`
    query {
        kontakt: file(relativePath: {regex: "/kontakt\/kontakt.jpg/"}) {
            publicURL
        },
    }`;

export default Kontakt;
import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql } from 'gatsby';
import { ContactDetailsWrapper } from './ContactDetails.styles';

export const contactData = {
    steven: {
        name: 'Steven Seiler',
        email: 'steven@muster-immobilien.de',
        phone: '+49 176 0000000',
    },
    heike: {
        name: 'Heike Seiler',
        email: 'heike@muster-immobilien.de ',
        phone: '+49 176 0000000',
    },
    martina: {
        name: 'Martina Seiler',
        email: 'martina@muster-immobilien.de',
        phone: '+49 176 0000000',
    },
    peter: {
        name: 'Peter Seiler',
        email: 'peter@muster-immobilien.de',
        phone: '+49 176 0000000',
    },
};

export const ContactDetails = ({contact = 'heike'}) => {

    contact = contact.toLowerCase();

    const data = useStaticQuery(graphql`
        query {
            heike: file(relativePath: {regex: "/wir\/heike.jpg/"}) {
                publicURL
            },
            martina: file(relativePath: {regex: "/wir\/martina.jpg/"}) {
                publicURL
            },
            peter: file(relativePath: {regex: "/wir\/peter.jpg/"}) {
                publicURL
            },
            steven: file(relativePath: {regex: "/wir\/simon.jpg/"}) {
                publicURL
            },
        }`);

    return (
        <ContactDetailsWrapper>
            {/*{console.log(contact)}*/}
            {/*{console.log(contactData[contact].email)}*/}
            {/*{console.log(data)}*/}
            {/*{console.log(data[contact].publicURL)}*/}
            <img src={data[contact].publicURL} alt="" />
            <div>
                <p>Kontakt:</p>
                <p>{contactData[contact].name}</p>
                <p>{contactData[contact].email}</p>
                <p>{contactData[contact].phone}</p>
            </div>
        </ContactDetailsWrapper>
    );

};
ContactDetails.propTyopes = {
    contact: PropTypes.oneOf(['heike', 'martina', 'peter', 'steven']).isRequired,
};

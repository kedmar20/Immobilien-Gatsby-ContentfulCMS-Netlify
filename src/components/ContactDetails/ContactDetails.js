import React from 'react';
// import PropTypes from 'prop-types';
import {graphql } from 'gatsby';
import { ContactDetailsWrapper } from './ContactDetails.styles';

export const contactData = {
    steven: {
        name: 'Steven Seiler',
        email: 'steven@muster-immobilien.de',
        phone: '+49 176 0000000',
    },
    anna: {
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

export const ContactDetails = ({avatarImages}) => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         anna: file(relativePath: {regex: "/zespol\/1_ania.jpg/"}) {
    //             publicURL
    //         },
    //         amanda: file(relativePath: {regex: "/zespol\/2_amanda.jpg/"}) {
    //             publicURL
    //         },
    //         kamila: file(relativePath: {regex: "/zespol\/3_kamila.jpg/"}) {
    //             publicURL
    //         },
    //         marta: file(relativePath: {regex: "/zespol\/4_marta.jpg/"}) {
    //             publicURL
    //         },
    //         patrycja: file(relativePath: {regex: "/zespol\/5_patrycja.jpg/"}) {
    //             publicURL
    //         },
    //     }`);

    return (
        <ContactDetailsWrapper>
            <img src={avatarImages} alt="" />
            <div>
                <p>Kontakt:</p>
                <p>{contactData.anna.name}</p>
                <p>{contactData.anna.email}</p>
                <p>{contactData.anna.phone}</p>
            </div>
        </ContactDetailsWrapper>
    );
};

// ContactDetails.propTyopes = {
//     contact: PropTypes.oneOf(['anna', 'amanda', 'kamila', 'patrycja', 'marta']).isRequired,
// };

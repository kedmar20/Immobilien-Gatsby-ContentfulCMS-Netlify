import React from 'react';
import { graphql } from 'gatsby';
import MailIcon from 'assets/icons/mail.svg';
import PhoneIcon from 'assets/icons/phone.svg';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { Hero, InfoItem, InfoItemContent, ContentWrapperWir } from 'assets/styles/pages/wir.styles';
import { contactData } from 'components/ContactDetails/ContactDetails';


const Wir = ({ data }) => (
    <ContentWrapperWir>
        <Hero imageSourceDesktop={data.wir.publicURL} imageSourceMobile={data.wir2.publicURL}>
            <div>
                <h1>Unser Team</h1>
                <p>Freundlicher Kundenkontakt auf Augenhöhe und modernste Vermarktungsmöglichkeiten sind uns besonders wichtig.</p>
            </div>
        </Hero>
        <InfoItem>
            <InfoItemContent>
                <HighlightedHeading>Steven Seiler</HighlightedHeading>
                <p>Inhaber, Immobilienmakler, Immobilienbetreuung, Marketing, Vertrieb, Kundendialog</p>
                <p>
                    Menschlichkeit kombiniert mit Professionalität ist die Basis für Erfolg. Nach diesem Motto betreuen wir jeden Immobilienverkauf sehr individuell und mit Herz. Für Sie gehen wir die Extra-Meile, damit der Immobilienverkauf für Sie ein tolles Erlebnis wird.
                </p>
                <a href={`mailto:${contactData.steven.email}`}>
                    <MailIcon />
                    {contactData.steven.email}
                </a>
                <a href={`tel:${contactData.steven.phone}`}>
                    <PhoneIcon />
                    {contactData.steven.phone}
                </a>
            </InfoItemContent>
            <img src={data.simon.publicURL} alt="" />
        </InfoItem>
        <InfoItem>
            <InfoItemContent>
                <HighlightedHeading>Heike Seiler</HighlightedHeading>
                <p>Immobilienmaklerin, Immobilienmediatorin Immobilienbetreuung, Home Staging</p>
                <p>
                    Aus Erfahrung weiß ich, wie wichtig der stete Kontakt zu Eigentümer und Interessent ist.  Gerne bin ich das Bindeglied zwischen beiden und stelle sicher, dass jeder alle relevanten Informationen zur Hand hat, damit das bestmögliche Ergebnis für beide Seiten erzielt wird
                </p>
                <a href={`mailto:${contactData.anna.email}`}>
                    <MailIcon />
                    {contactData.anna.email}
                </a>
                <a href={`tel:${contactData.anna.phone}`}>
                    <PhoneIcon />
                    {contactData.anna.phone}
                </a>
            </InfoItemContent>
            <img src={data.heike.publicURL} alt="" />
        </InfoItem>
        <InfoItem>
            <InfoItemContent>
                <HighlightedHeading>Martina Seiler</HighlightedHeading>
                <p>Maklerassistenz, Kundendialog</p>
                <p>
                    Damit Sie als Immobilienverkäufer ihre Immobilie unter optimalen Bedingungen und mit besten Chancen verkaufen, nehme ich Kontakt zu Ihnen auf, um Ihnen die professionellen Maklerleistungen von KROß IMMOBILIEN anzubieten.
                </p>
                <a href={`mailto:${contactData.martina.email}`}>
                    <MailIcon />
                    {contactData.martina.email}
                </a>
                <a href={`tel:${contactData.martina.phone}`}>
                    <PhoneIcon />
                    {contactData.martina.phone}
                </a>
            </InfoItemContent>
            <img src={data.martina.publicURL} alt="" />
        </InfoItem>
        <InfoItem>
            <InfoItemContent>
                <HighlightedHeading>Peter Seiler</HighlightedHeading>
                <p>Maklerassistenz, Kundendialog</p>
                <p>
                    Es freut mich sehr, wenn ein guter und erfolgreicher Kontakt zustande kommt und die Immobilie zur Zufriedenheit des Eigentümers verkauft wird. Um einen Eindruck zu bekommen, wo sich Ihre zukünftige Immobilie befindet,
                    Guter Service ist eine Herzensangelegenheit.

                </p>
                <a href={`mailto:${contactData.peter.email}`}>
                    <MailIcon />
                    {contactData.peter.email}
                </a>
                <a href={`tel:${contactData.peter.phone}`}>
                    <PhoneIcon />
                    {contactData.peter.phone}
                </a>
            </InfoItemContent>
            <img src={data.peter.publicURL} alt="" />
        </InfoItem>
    </ContentWrapperWir>
);

export const query = graphql`
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
        simon: file(relativePath: {regex: "/wir\/simon.jpg/"}) {
            publicURL
        },
        wir: file(relativePath: {regex: "/wir\/wir.jpg/"}) {
            publicURL
        },
        wir2: file(relativePath: {regex: "/wir\/wir2.jpg/"}) {
            publicURL
        },
    }`;

export default Wir;
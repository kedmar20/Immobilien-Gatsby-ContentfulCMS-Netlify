import React from 'react';
import BlocksIcon from 'assets/icons/blocks.svg';
import ConsultancyIcon from 'assets/icons/consultancy.svg';
import HeartIcon from 'assets/icons/heart.svg';
import PeopleIcon from 'assets/icons/people.svg';
import SuitcaseIcon from 'assets/icons/suitcase.svg';
import PenIcon from 'assets/icons/pen.svg';
import { graphql } from 'gatsby';
import {
    Hero, HeroImage, HeroInfo, ServicesStyledList, ContentWrapperLeistungen
} from 'assets/styles/pages/leistungen.styles';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';

const Leistungen = ({ data }) => (
    <ContentWrapperLeistungen>
        <Hero>
            <h1>Full-Service-Büro für alle Anliegen des Immobilien-verkaufs</h1>
            <HeroImage imageSource={data.leistungen.publicURL} />
            <HeroInfo>
                <p>
                    Freundlicher Kundenkontakt auf Augenhöhe und modernste Vermarktungsmöglichkeiten sind uns besonders wichtig.
                </p>
                <a href="#details">Weiterlesen</a>
            </HeroInfo>
        </Hero>
        <HighlightedHeading id="details">Wie können wir Ihnen helfen?</HighlightedHeading>
        <ServicesStyledList>
            <li>
                <PeopleIcon />
                <h3>Bewertung</h3>
                <p>
                    Realistische Immobilien-Bewertung für beste Erfolgschancen. Immobilie einfach kostenlos bewerten lassen.
                </p>
            </li>
            <li>
                <ConsultancyIcon />
                <h3>Beratung</h3>
                <p>
                    Kostenlose Immobilienberatung. Wichtige Fragen vor dem Verkauf klären. Wie is die aktuelle Situation am Markt. Tipps / Rat vom Experten.
                    Proffesionelle Einschätzung.

                </p>
            </li>
            <li>
                <HeartIcon />
                <h3>Home staging</h3>
                <p>
                    Für den ersten Eindruck gibt es keine zweite Chance. Wir beraten Sie gerne während eines persönlichen Besichtigungstermins und zeigen Ihnen Möglichkeiten und Vorschläge für eine optimale Präsentation Ihrer Immobilie mit Home Staging.
                </p>
            </li>
            <li>
                <BlocksIcon />
                <h3>Suchauftrag</h3>
                <p>
                    Sie suchen eine Immobilie in der Region Freiburg zum Kauf? Lassen Sie sich jetzt kostenlos und unverbindlich in unsere Such-Kartei aufnehmen und bleiben Sie über neue Immobilien informiert.
                </p>
            </li>
            <li>
                <SuitcaseIcon />
                <h3>Top Preis-Leistung und keinerei Risiko</h3>
                <p>
                    Sie vertrauen uns Ihre Immobilie an und wir vertrauen auf eine gute Zusammenarbeit. Als Maler Ihres Vertrauens gehen wir für einen erfolgreichen Verkaufsabschluss mit allem in Vorleistung. Das „Rundum-Sorglos-Paket“ beinhaltet all unsere Services und ...
                </p>
            </li>
            <li>
                <PenIcon />
                <h3>Unterlagen</h3>
                <p>
                    Komplette Unterlagen-Beschaffung inkl. Bankenpaket.
                </p>
            </li>
        </ServicesStyledList>
    </ContentWrapperLeistungen>
);

export const query = graphql`
    query {
        leistungen: file(relativePath: {regex: "/leistungen\/leistungen.jpg/"}) {
            publicURL
        },       
    }`;

export default Leistungen;
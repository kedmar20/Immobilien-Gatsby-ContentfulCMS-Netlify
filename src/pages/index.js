import React from "react"
import styled from "styled-components";
import { graphql, Link } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import {
    AdvantagesSection,
    Hero,
    HeroHeading,
    ReviewsSection,
    ServicesSection, ShowcaseCorner,
    ShowcaseGallery,
    ShowcaseImage,
    ShowcaseSection,
    StyledButton, StyledLinkButton,
    StyledReview, TeamImage, TeamSection,
    WelcomeSection,
    WelcomeSectionContent,
    WelcomeSectionImage,
    ContactSection,
} from 'assets/styles/pages/homepage.styles';
import { StyledList } from 'components/StyledList/StyledList.styles';
import { ContactForm } from '../components/ContactForm/ContactForm';



const IndexPage = ({data}) => {
  return (
    <MainWrapper>
      <Hero imageSource={data.hero.publicURL} >
        <HeroHeading position="bottomLeft" color="dark" size="100px" distance="30px">
          <h1>FÜR UNSERE KUNDEN NUR DAS BESTE!</h1>
          <p>MIT UNS ALS IMMOBILIENMAKLER
              ERLEBEN SIE DEN IMMOBILIENVERKAUF
              VON HEUTE.</p>
        </HeroHeading>
        {/*<HeroImage imageSource={data.hero.publicURL} />*/}
      </Hero>
        <WelcomeSection>
            <WelcomeSectionContent position="topRight" size="100px" distance="30px" offset="600">
                <h2>
                    DER IMMOBILIENMAKLER  MIT DEM „RUNDUM-SORGLOS-PAKET“
                </h2>
                <p>
                    Wir sind Ihr Immobilienmakler  mit dem „Rundum-Sorglos-Paket“. </p>
                <p>Durch Home Staging lassen wir jede Immobilie im besten Licht erstrahlen. Verkaufen Sie Ihre Immobilie unkompliziert, zügig und rechtssicher.
                </p>
            </WelcomeSectionContent>
            <WelcomeSectionImage position="bottomLeft" color="beige" size="100px" distance="30px" imageSource={data.welcome.publicURL} />
        </WelcomeSection>


        <AdvantagesSection>
            <HighlightedHeading width="50" isRight>Das dürfen Sie von uns erwarten:</HighlightedHeading>
            <StyledList>
                <li>
                    <h3>
                        MAKLERVERSPRECHEN
                    </h3>
                    <p>
                        Unser Maklerversprechen an Sie: Von Anfang an ist Ihre Immobilie bei uns in guten Händen. Sie haben mit uns nicht nur einen Immobilienmakler, sondern einen Immobilien-Partner an Ihrer Seite, dem Ihr Immobilienverkauf mindestens genauso wichtig ist, wie Ihnen.
                    </p>
                </li>
                <li>
                    <h3>
                        TOP PREIS-LEISTUNG
                    </h3>
                    <p>
                        Top Preis-Leistung und keinerlei Risiko. Sie vertrauen uns Ihre Immobilie an und wir vertrauen auf eine gute Zusammenarbeit. Als Maler Ihres Vertrauens gehen wir für einen erfolgreichen Verkaufsabschluss mit allem in Vorleistung.
                    </p>
                </li>
                <li>
                    <h3>
                        IMMOBILIENPROFI
                    </h3>
                    <p>
                        Ein Immobilienprofi, der für Sie alles übernimmt. Sie lehnen sich zurück und wir als Ihr Full-Service-Immobilienmakler erledigen alles: von der Unterlagenbeschaffung, Fotos, Video, 3D-Darstellung, Marketing, Terminabsprachen, bis hin zum Bereitstellen der echten Kaufinteressenten.
                    </p>
                </li>
            </StyledList>
        </AdvantagesSection>
        <ShowcaseSection>
            <h2>Immobilien</h2>
            <div>
                <StyledButton as={Link} to="/immobilien" isCentered>ANGEBOT</StyledButton>
                <StyledButton as={Link} to="/homestaging" isCentered>HOME STAGING</StyledButton>
            </div>
            <ShowcaseGallery>
                <ShowcaseImage src={data.grid1.publicURL} alt="#" />
                <ShowcaseImage isBig src={data.grid2.publicURL} alt="#" />
                <ShowcaseImage src={data.grid3.publicURL} alt="#" />
                <ShowcaseImage isBig src={data.grid4.publicURL} alt="#" />
                <ShowcaseCorner position="bottomLeft" size="100px" distance="30px" color="beige" />
                <ShowcaseCorner position="topRight" size="100px" distance="30px" color="dark" />
            </ShowcaseGallery>
        </ShowcaseSection>
        <ServicesSection>
            <div>
                <HighlightedHeading width="55">Full-Service-Büro für alle Anliegen des Immobilienverkaufs</HighlightedHeading>
                <StyledLinkButton as={Link} to="/leistungen">WEITERE INKLUSIVLEISTUNGEN</StyledLinkButton>
            </div>
            <p>
                Freundlicher Kundenkontakt auf Augenhöhe und modernste Vermarktungsmöglichkeiten sind uns besonders wichtig.
            </p>
            <StyledList>
                <li>
                    <h3>Bewertung</h3>
                    <p>
                        Realistische Immobilien-Bewertung für beste Erfolgschancen. Immobilie einfach kostenlos bewerten lassen.
                    </p>
                </li>
                <li>
                    <h3>Beratung</h3>
                    <p>
                        Kostenlose Immobilienberatung. Wichtige Fragen vor dem Verkauf klären. Wie is die aktuelle Situation am Markt. Tipps / Rat vom Experten.
                        Proffesionelle Einschätzung.

                    </p>
                </li>
                <li>
                    <h3>Home staging</h3>
                    <p>
                        Für den ersten Eindruck gibt es keine zweite Chance. Wir beraten Sie gerne während eines persönlichen Besichtigungstermins und zeigen Ihnen Möglichkeiten und Vorschläge für eine optimale Präsentation Ihrer Immobilie mit Home Staging.
                    </p>
                </li>
                <li>
                    <h3>Suchauftrag</h3>
                    <p>
                        Sie suchen eine Immobilie in der Region Freiburg zum Kauf? Lassen Sie sich jetzt kostenlos und unverbindlich in unsere Such-Kartei aufnehmen und bleiben Sie über neue Immobilien informiert.
                    </p>
                </li>
            </StyledList>
        </ServicesSection>
        <TeamSection>
            <div>
                <HighlightedHeading width="70">Kontaktieren Sie uns</HighlightedHeading>
                <p>
                    Freundlicher Kundenkontakt auf Augenhöhe und modernste Vermarktungsmöglichkeiten sind uns besonders wichtig.
                </p>
                <StyledLinkButton as={Link} to="/team">Kostenlose Immobilienberatung vereinbaren</StyledLinkButton>
            </div>
            <TeamImage offset="700" position="bottomLeft" size="70px" distance="20px" color="beige" imageSource={data.team1.publicURL} alt="" />
            <TeamImage position="topRight" size="100px" distance="30px" color="dark" imageSource={data.team2.publicURL} alt="" />
        </TeamSection>
        <ReviewsSection>
            <div>
                <HighlightedHeading width="70">
                    Das sagen unsere Kunden...
                </HighlightedHeading>
                <p>
                    Langjährige, vertrauensvolle Kundenbeziehungen erachten wir als wichtigste Basis für unser erfolgreiches Bestehen. Was unsere Kunden über uns sagen erfahren Sie hier.
                </p>
            </div>
            <div>
                <StyledReview>
                    <p>
                        Zusammenarbeit, Erstellung der Unterlagen, Fotos und Filmen, Abwicklung und Betreuung, alles sehr, sehr professionell und angenehm. Ganz GROSSES Lob!!
                    </p>
                    <p>Martin</p>
                </StyledReview>
                <StyledReview>
                    <p>
                        Vollprofi mit profundem Fachwissen und ohne den üblichen "Makler-Allüren". Kann man nur weiterempfehlen. :- ))
                    </p>
                    <p>Heike</p>
                </StyledReview>
            </div>
        </ReviewsSection>
        <ContactSection>
            <HighlightedHeading width="70">Kontaktformular</HighlightedHeading>
            <ContactForm/>
        </ContactSection>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
 // background-color: ${({theme})=>theme.colors.steel};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  width: 100vw;
  min-height: 100vh;
  //margin-top: 130px;
  z-index: -1;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1920px;
    margin: 0 auto 0 auto;
    padding: 180px 100px;
  }
`
export const query = graphql`
    query {
        hero: file(relativePath: {regex: "/homepage\/0_hero.jpg/"}) {
            publicURL
        },
        welcome: file(relativePath: {regex: "/homepage\/1_welcome.jpg/"}) {
            publicURL
        },
        grid1: file(relativePath: {regex: "/homepage\/2_grid.jpg/"}) {
            publicURL
        },
        grid2: file(relativePath: {regex: "/homepage\/3_grid.jpg/"}) {
            publicURL
        },
        grid3: file(relativePath: {regex: "/homepage\/4_grid.jpg/"}) {
            publicURL
        },
        grid4: file(relativePath: {regex: "/homepage\/5_grid.jpg/"}) {
            publicURL
        },
        team1: file(relativePath: {regex: "/homepage\/6_kontakt.jpg/"}) {
            publicURL
        },
        team2: file(relativePath: {regex: "/homepage\/7_kontakt.jpg/"}) {
            publicURL
        },
    }`;




export default IndexPage

export const Head = () => <title>Home Page</title>

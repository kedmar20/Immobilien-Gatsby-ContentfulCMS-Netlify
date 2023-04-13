import React from "react"
import styled from "styled-components";
import { graphql, Link } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import {
    AdvantagesSection,
    Hero,
    HeroHeading, HeroImage,
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
} from 'assets/styles/pages/homepage.styles';


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
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
 // background-color: ${({theme})=>theme.colors.steel};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  width: 100vw;
  min-height: 100vh;
  //margin-top: 130px;
  //padding: 100px 20px;
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

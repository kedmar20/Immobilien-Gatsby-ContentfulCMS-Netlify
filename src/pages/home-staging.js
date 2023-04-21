import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { IntroSection, PortfolioItem, ContentWrapperHomestaging } from 'assets/styles/pages/home-staging.styles';
import { CornerEffect } from 'components/CornerEffectProvider/CornerEffect';

const HomeStaging = ({ data }) => (
    <ContentWrapperHomestaging isSubpage>
        <CornerEffect position="bottomRight"
            size={(!!window &&(!!window &&(window.innerWidth>1100))) ? "100px" : "0px"}
                      distance="30px">
            <IntroSection>
                <div>
                    <HighlightedHeading width="65">UNSER DESIGN DES ERFOLGREICHEN IMMOBILIENVERKAUFS</HighlightedHeading>
                    <p>
                        Mit professionellem Home Staging beschleunigt sich der Immobilienverkauf, angemessene Preise werden erzielt und alle Beteiligten glücklich gemacht.
                    </p>
                </div>
                <img src={data.homestaging1.publicURL} alt="" />
            </IntroSection>
        </CornerEffect>
        <CornerEffect position="topLeft" size={(!!window &&(!!window &&(window.innerWidth>1100))) ? "100px" : "0px"} distance="30px" color="beige">
            <PortfolioItem isOdd>
                <div>
                    <HighlightedHeading width="70">Grünestraße</HighlightedHeading>
                    <p>
                        Bäder und Küchen bleiben auch nach dem Auszug des Bewohner meistens verbaut. Hier lohnt es sich für den Verkauf aufzuräumen. Nicht benötigte oder defekte Alltagsgegenstände gehören beiseite oder sollten entsorgt werden. Das Entfernen von Vorhängen oder Gardinen lässt oft zusätzliches Tageslicht in den Raum dringen und diesen heller und freundlicher wirken. So tragen Kleinigkeiten zu einem aufgeräumten ersten Gesamteindruck bei.
                    </p>
                </div>
                <img src={data.gruenestrasse.publicURL} alt="" />
            </PortfolioItem>
        </CornerEffect>
        <CornerEffect position="bottomRight" size={(!!window &&(!!window &&(window.innerWidth>1100))) ? "100px" : "0px"} distance="30px" color="dark">
            <PortfolioItem>
                <div>
                    <HighlightedHeading width="80">Türkisstraße</HighlightedHeading>
                    <p>
                        Nutzflächen, wie z.B. Speicher oder Kellerräume werden oft als Zwischenlager für den Umzug genutzt. Sollte es möglich sein, dann lohnt sich auch hier aufräumen, putzen und ggf. umgestalten.
                    </p>
                </div>
                <img src={data.tuerkisstrasse.publicURL} alt="" />
            </PortfolioItem>
        </CornerEffect>
        <CornerEffect position="topLeft" size={(!!window &&(!!window &&(window.innerWidth>1100))) ? "100px" : "0px"} distance="30px" color="beige">
            <PortfolioItem isOdd>
                <div>
                    <HighlightedHeading width="80">Lavendelstraße</HighlightedHeading>
                    <p>
                        Bäder und Küchen bleiben auch nach dem Auszug des Bewohner meistens verbaut. Hier lohnt es sich für den Verkauf aufzuräumen. Nicht benötigte oder defekte Alltagsgegenstände gehören beiseite oder sollten entsorgt werden. Das Entfernen von Vorhängen oder Gardinen lässt oft zusätzliches Tageslicht in den Raum dringen und diesen heller und freundlicher wirken. So tragen Kleinigkeiten zu einem aufgeräumten ersten Gesamteindruck bei.
                    </p>
                </div>
                <img src={data.lavendelstrasse.publicURL} alt="" />
            </PortfolioItem>
        </CornerEffect>
        <CornerEffect position="bottomRight" size={(!!window &&(!!window &&(window.innerWidth>1100))) ? "100px" : "0px"} distance="30px" color="beige">
            <PortfolioItem isFullWidth>
                <div>
                    <HighlightedHeading>Beigestraße</HighlightedHeading>
                    <p>
                        Manchmal reicht es auch aus, wenn man vorhandenes Mobiliar nutzt, mit weiteren Möbeln neu kombiniert und Umzugskartons wegräumt.
                    </p>
                </div>
                <img src={data.beigestrasse.publicURL} alt="" />
            </PortfolioItem>
        </CornerEffect>
    </ContentWrapperHomestaging>
);
export const query = graphql`
    query {
        beigestrasse: file(relativePath: {regex: "/home-staging\/beigestrasse.jpg/"}) {
            publicURL
        },
        gruenestrasse: file(relativePath: {regex: "/home-staging\/gruenestrasse.jpg/"}) {
            publicURL
        },
        homestaging1: file(relativePath: {regex: "/home-staging\/homestaging1.jpg/"}) {
            publicURL
        },
        lavendelstrasse: file(relativePath: {regex: "/home-staging\/lavendelstrasse.jpg/"}) {
            publicURL
        },
        tuerkisstrasse: file(relativePath: {regex: "/home-staging\/tuerkisstrasse.jpg/"}) {
            publicURL
        },

    }`;

export default HomeStaging;
import React from 'react';
import { Link } from 'gatsby';
import FacebookIcon from 'assets/icons/facebook.svg';
import InstagramIcon from 'assets/icons/Instagram.svg';
import { StyledFooter } from 'components/Footer/footer.styles';
import { StyledIcon } from 'components/StyledIcon/StyledIcon';

export const Footer = () => (
    <StyledFooter>
        <Link to="/">
            <h4>Sailer Immobilien</h4>
        </Link>
        <div>
            <Link to="/immobilien">Immobilien</Link>
            <Link to="/home-staging">Home Staging</Link>
            <Link to="/wir">Wir</Link>
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/kontakt">Kontakt</Link>
        </div>
        <div>
            <StyledIcon as="a" href="https://www.facebook.com/" target="_blank" isDark>
                <FacebookIcon />
            </StyledIcon>
            <StyledIcon as="a" href="https://www.instagram.com/" target="_blank" isDark>
                <InstagramIcon />
            </StyledIcon>
        </div>
    </StyledFooter>
);
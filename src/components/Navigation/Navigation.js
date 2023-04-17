import React, { useState } from 'react';
 import { Link } from "gatsby";
 import FacebookIcon from 'assets/icons/facebook.svg';
 import InstagramIcon from 'assets/icons/Instagram.svg';
 import {StyledIcon} from "components/StyledIcon/StyledIcon";
 import {OuterWrapperNavigation,
     StyledBurger,
     StyledLogo,
     StyledNavigation,
     WrapperNavigation,} from "./Navigation.styles";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    };
    return (
        <OuterWrapperNavigation>
            <Link to="/">
                <StyledLogo isSmall isMobile/>
            </Link>
            <StyledBurger onClick={toggleNavigation}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <WrapperNavigation isOpen={isOpen}>
                <Link to="/"><StyledLogo/></Link>
                <StyledNavigation>
                    <ul>
                        <li><Link onClick={toggleNavigation} to="/immobilien">Immobilien</Link></li>
                        <li><Link onClick={toggleNavigation} to="/home-staging">Home Staging</Link></li>
                        <li><Link onClick={toggleNavigation} to="/wir">Wir</Link></li>
                        <li><Link onClick={toggleNavigation} to="/leistungen">Leistungen</Link></li>
                        <li><Link onClick={toggleNavigation} to="/kontakt">Kontakt</Link></li>
                    </ul>
                </StyledNavigation>
                <div>
                    <StyledIcon isDark><Link to="https://www.facebook.com/"><FacebookIcon/></Link></StyledIcon>
                    <StyledIcon isDark><Link to="https://www.instagram.com/"><InstagramIcon/></Link></StyledIcon>
                </div>
            </WrapperNavigation>
        </OuterWrapperNavigation>
    );
};




 


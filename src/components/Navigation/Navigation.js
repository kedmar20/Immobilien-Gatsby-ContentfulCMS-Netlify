 import React from "react";
 import styled from 'styled-components';
 import { Link } from "gatsby";
 import Logo from 'assets/icons/logo-black.svg';
 import FacebookIcon from 'assets/icons/fb.svg';
 import InstagramIcon from 'assets/icons/Instagram.svg';
 import {StyledIcon} from "components/StyledIcon/StyledIcon";

 const WrapperNavigation = styled.div`
 display: flex;
   flex-direction: column;
   width: 100%;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;
   background-color: white;
   align-items: center;
   justify-content: space-between;
   padding: 50px;
 `

 const StyledLogo = styled(Logo)`
 width: 300px;
 `

export const Navigation = () => (
    <WrapperNavigation>
        <Link to="/"><StyledLogo/></Link>
        <nav>
            <ul>
                <li><Link to="/">Immobilien</Link></li>
                <li><Link to="/">Home Staging</Link></li>
                <li><Link to="/">Wir</Link></li>
                <li><Link to="/">Leistungen</Link></li>
                <li><Link to="/">Kontakt</Link></li>
            </ul>
        </nav>
        <div>
        <StyledIcon isDark><FacebookIcon/></StyledIcon>
        <StyledIcon isDark><InstagramIcon/></StyledIcon>
        </div>
    </WrapperNavigation>
        );




 


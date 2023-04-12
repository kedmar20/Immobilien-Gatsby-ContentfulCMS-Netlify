 import React from "react";
 import styled from 'styled-components';
 import { Link } from "gatsby";
 import Logo from 'assets/icons/logo-black.svg';
 import FacebookIcon from 'assets/icons/fb.svg';
 import InstagramIcon from 'assets/icons/Instagram.svg';
 import {StyledIcon} from "components/StyledIcon/StyledIcon";

export const Navigation = () => (
    <div>
        <Link to="/"><Logo/></Link>
        <nav>
            <ul>
                <li><Link to="/">Immobilien</Link></li>
                <li><Link to="/">Home Staging</Link></li>
                <li><Link to="/">Wir</Link></li>
                <li><Link to="/">Leistungen</Link></li>
                <li><Link to="/">Kontakt</Link></li>
            </ul>
        </nav>
        <StyledIcon isDark><FacebookIcon/></StyledIcon>
        <StyledIcon isDark><InstagramIcon/></StyledIcon>
    </div>
        )
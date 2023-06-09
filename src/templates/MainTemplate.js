import React from 'react'
import PropTypes from 'prop-types';
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "assets/styles/GlobalStyles";
import {theme} from "assets/styles/theme";
import 'assets/styles/normalize.css';
import { Navigation } from 'components/Navigation/Navigation';
import { Footer } from 'components/Footer/footer';

export const MainTemplate = ({children})=>(
    <>
    <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    </>
)

MainTemplate.protoTypes = {
    children: PropTypes.node.isRequired,
}
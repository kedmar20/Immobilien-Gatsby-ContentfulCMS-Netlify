import React from 'react'
import PropTypes from 'prop-types';
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "assets/styles/GlobalStyles";
import {theme} from "assets/styles/theme";
import 'assets/styles/normalize.css';
import { Navigation } from 'components/Navigation/Navigation';

export const MainTemplate = ({children})=>(
    <>
    <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Navigation />
            <main>
                {children}
            </main>
        </ThemeProvider>
    </>
)

MainTemplate.protoTypes = {
    children: PropTypes.node.isRequired,
}
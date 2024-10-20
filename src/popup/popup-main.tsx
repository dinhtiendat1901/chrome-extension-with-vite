import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./Popup";
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";

const theme = createTheme({
    fontSmoothing: true,
    fontFamily: 'Nunito, sans-serif',
    primaryColor: 'blue'
});


ReactDOM.createRoot(document.querySelector('#main-container')!).render(
    <MantineProvider theme={theme}><Popup/></MantineProvider>
);


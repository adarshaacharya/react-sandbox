import React from "react";

import {ThemeProvider} from 'styled-components/macro'
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Heading, Button, CancelButton } from "./elements";


const theme = {
  colors : {
    primary: "#E54B48",
    secondary : "#DBDE61"
  }
}


const themeTwo = {
  colors : {
    primary: "#524763",
    secondary : "#82D8D8"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Button>Say Hello</Button>

      <CancelButton>Say Hello</CancelButton>

      <CancelButton size="small">Say Hello</CancelButton>

      <Button modifiers="cancel">Don't say Hello</Button>

      <Button modifiers="small">Say Hello</Button>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

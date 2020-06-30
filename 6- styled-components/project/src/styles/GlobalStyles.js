import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
		background: ${(props) => props.theme.bodyBackgroundColor};
        min-height : 100vh;
        margin : 0;
        color  : ${(props) => props.theme.bodyFontColor};
        font-family : 'Kaushan Script';
    }

`

export default GlobalStyles

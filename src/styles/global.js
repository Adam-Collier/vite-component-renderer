export const globalStyles = `
    :root{
      --primary-black: #141414;
      --primary-white: #FFFFFF;
      --border-radius: 3px;
    }
    
    *,
    :after,
    :before {
        box-sizing: border-box;
    }

    .breadcrumbs {
        display: none;
    }

    @media (min-width: 768px){
        .main-container {
            max-width: none;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
            padding-right: 0;
        }
    }

    @media (max-width: 767px) {
        .main-container .main > :not(.toolbar-container) {
            max-width: none;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
        }
    }

    html {
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }

    body{
        text-rendering: optimizeSpeed;
    }

    @-moz-document url-prefix() {
        body {
            font-weight: lighter !important;
        }
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
        color: var(--primary-black);
    }
`;

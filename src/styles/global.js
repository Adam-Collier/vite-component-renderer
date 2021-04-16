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

    p {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.75;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
    }

    body {
        margin: 0;
    }
`;

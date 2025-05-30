import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Importation de la police Jost */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Meta tags additionnels si besoin */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;

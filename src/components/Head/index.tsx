import NextHead from "next/head";
import { ReactNode } from "react";

interface HeadProps {
  children: ReactNode;
}

export default function Head({ children }: HeadProps) {
  return (
    <NextHead>
      {children}

      <link rel="shortcut icon" href="/logo.png" type="image/png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />

      {/* Pwa Meta Tags */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="BrazilCSS é um framework css para devs iniciantes "
      />
      <meta
        name="keywords"
        content="HTML,CSS,DAVIDLPC,DAVIDLPC1,BRAZILCSS,BRASIL,BRAZIL,BRASILCSS"
      />

      <meta name="theme-color" content="#1B73BA" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="apple-mobile-web-app-title" content="BrazilCSS WebSite" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="msapplication-navbutton-color" content="#009b3a" />
      <meta name="msapplication-TileColor" content="#1B73BA" />
      <meta name="msapplication-TileImage" content="/icons/icon-128x128.png" />

      <meta name="application-name" content="Davi's Blog" />
      <meta
        name="msapplication-tooltip"
        content="BrazilCSS é um framework css para devs iniciantes "
      />
      <meta name="msapplication-starturl" content="/" />

      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* <meta name="nightmode" content="enable/disable" /> */}

      <meta name="layoutmode" content="fitscreen/standard" />

      <meta name="imagemode" content="force" />

      <meta name="screen-orientation" content="portrait"></meta>

      <link
        href="/icons/icon-24x24.png"
        rel="icon"
        type="image/png"
        sizes="24x24"
      />
      <link
        href="/icons/icon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="/icons/icon-48x48.png"
        rel="icon"
        type="image/png"
        sizes="48x48"
      />
      <link
        href="/icons/icon-64x64.png"
        rel="icon"
        type="image/png"
        sizes="64x64"
      />
      <link
        href="/icons/icon-96x96.png"
        rel="icon"
        type="image/png"
        sizes="96x96"
      />
      <link
        href="/icons/icon-128x128.png"
        rel="icon"
        type="image/png"
        sizes="128x128"
      />
      <link
        href="/icons/icon-144x144.png"
        rel="icon"
        type="image/png"
        sizes="144x144"
      />
      <link
        href="/icons/icon-152x152.png"
        rel="icon"
        type="image/png"
        sizes="152x152"
      />
      <link
        href="/icons/icon-192x192.png"
        rel="icon"
        type="image/png"
        sizes="192x192"
      />
      <link
        href="/icons/icon-256x256.png"
        rel="icon"
        type="image/png"
        sizes="256x256"
      />
      <link
        href="/icons/icon-384x384.png"
        rel="icon"
        type="image/png"
        sizes="384x384"
      />
      <link
        href="/icons/icon-512x512.png"
        rel="icon"
        type="image/png"
        sizes="512x512"
      />
      <link
        href="/icons/icon-1200x1200.png"
        rel="icon"
        type="image/png"
        sizes="1200x1200"
      />

      <link href="/icons/icon-64x64.png" rel="apple-touch-icon" sizes="64x64" />
      <link
        href="/icons/icon-128x128.png"
        rel="apple-touch-icon"
        sizes="128x128"
      />
      <link
        href="/icons/icon-256x256.png"
        rel="apple-touch-icon"
        sizes="256x256"
      />
      <link href="/icons/icon-96x96.png" rel="apple-touch-icon" sizes="96x96" />

      <link href="/icons/icon-512x512.png" rel="apple-touch-startup-image" />

      <link
        href="icons/icon-24x24.png"
        rel="mask-icon"
        sizes="24x24"
        color="red"
      />

      <link href="icons/icon-192x192.png" rel="icon" sizes="192x192" />

      <link
        href="/icons/icon-64x64.png"
        rel="apple-touch-icon-precomposed"
        sizes="64x64"
      />
      <link href="/icons/icon-64x64.png" rel="apple-touch-icon" sizes="64x64" />

      <link href="/manifest.json" rel="manifest"></link>
    </NextHead>
  );
}

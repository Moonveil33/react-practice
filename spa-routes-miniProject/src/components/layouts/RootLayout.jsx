import React from "react";
import { Outlet, ScrollRestoration, useMatches } from "react-router";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import BackgroundUi from "../commons/BackgroundUi";

function RootLayout() {
  const matches = useMatches();
  const hideFooter = matches.some((match) => match.handle?.hideFooter);
  return (
    <section>
      <Header />
      <ScrollRestoration />
      <main id="content" className="z-10 relative">
        <Outlet />
      </main>
      <BackgroundUi />

      {!hideFooter && <Footer />}
    </section>
  );
}

export default RootLayout;

import { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Layout } from "@components/Common/Layout";
import { Loader } from "@components/Common/Loader";

import "@styles/index.scss";

export default function App({ Component, router, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleStartRouteChanging = () => setLoading(true);
    const handleCompleteRouteChanging = () => setLoading(false);

    router.events.on("routeChangeStart", handleStartRouteChanging);
    router.events.on("routeChangeComplete", handleCompleteRouteChanging);

    return () => {
      router.events.off("routeChangeStart", handleStartRouteChanging);
      router.events.off("routeChangeComplete", handleCompleteRouteChanging);
    };
  }, []);

  return (
    <ThemeProvider>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={router.pathname}
          classNames='pageTransition'
          timeout={300}
          nodeRef={nodeRef}
        >
          <Layout ref={nodeRef}>
            <Component {...pageProps} />
          </Layout>
        </CSSTransition>
      </SwitchTransition>

      <Loader loading={loading} />
    </ThemeProvider>
  );
}

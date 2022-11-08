import "../styles/globals.sass";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { RecoilRoot } from "recoil";
const lightTheme = createTheme({
  type: "light",
  theme: {},
});
const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RecoilRoot>
      <NextThemesProvider
        defaultTheme='system'
        attribute='class'
        value={{ light: lightTheme.className, dark: darkTheme.className }}
      >
        <NextUIProvider>
          <ProSidebarProvider>
            <Component {...pageProps} />
          </ProSidebarProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </RecoilRoot>
  );
}

export default MyApp;

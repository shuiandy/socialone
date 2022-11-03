import "../styles/globals.sass";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ProSidebarProvider } from "react-pro-sidebar";
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
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;

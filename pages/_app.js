import "../styles/globals.sass";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react";
const lightTheme = createTheme({
  type: "light",
  theme: {},
});
const darkTheme = createTheme({
  type: "dark",
  theme: {},
});
function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;

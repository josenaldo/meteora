"use client";

import { Roboto } from "next/font/google";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/styles";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Meteora",
  description: "Peças versáteis e atemporais para o seu dia a dia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <body className={roboto.className} id="__next">
            <CssBaseline />
            {children}
          </body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}

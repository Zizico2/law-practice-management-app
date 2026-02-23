import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import AppBar from '@mui/material/AppBar';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveDrawer from "@/components/ResponsiveDrawer";
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="data" defaultMode="dark"/>
        <AppRouterCacheProvider>
          
          <ThemeProvider theme={theme} defaultMode="dark">
            <CssBaseline />
            <ResponsiveDrawer />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

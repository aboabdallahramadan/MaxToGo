import LayoutHeader from "@/components/layout/LayoutHeader";
import "@/public/css/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';

export const metadata = {
  title: "Flyttconnect",
  description: "Get shipping and cleaning services easily",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <LayoutHeader/>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

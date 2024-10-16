import Footer from "@/components/mainPage/Footer";
import LayoutHeader from "@/components/mainPage/LayoutHeader";
import "@/public/css/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      <NextIntlClientProvider messages={messages}>
        <html lang="en">
          <body className="min-h-screen flex flex-col justify-between">
              
              {children}
              
              <ToastContainer theme="dark"/>
          </body>
        </html> 
      </NextIntlClientProvider>
  );
}

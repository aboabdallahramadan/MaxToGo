import "@/public/css/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "MovingGoMax",
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
          <body>
              
              {children}
              
              <ToastContainer theme="dark"/>
          </body>
        </html> 
      </NextIntlClientProvider>
  );
}

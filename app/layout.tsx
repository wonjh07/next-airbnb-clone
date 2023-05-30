import NavBar from './components/navbar/NavBar';
import { Nunito } from 'next/font/google';
import './style/globals.css';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import RentModal from './components/modals/RentModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProviders';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

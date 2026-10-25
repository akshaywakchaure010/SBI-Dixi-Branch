import { LangProvider } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Branch from './components/Branch';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Team from './components/Team';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Branch />
        <Services />
        <Calculator />
        <Team />
        <Visit />
      </main>
      <Footer />
    </LangProvider>
  );
}

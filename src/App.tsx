import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import WhatsIncluded from './components/WhatsIncluded';
import RouteMap from './components/RouteMap';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <EventDetails />
      <WhatsIncluded />
      <RouteMap />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;

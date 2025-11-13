import { Header } from '../components/Header';
import { ServiceAreas } from '../components/ServiceAreas';
import { Footer } from '../components/Footer';

export function ServiceAreasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceAreas />
      <Footer />
    </div>
  );
}


import { NavBar } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <div className="container relative px-4">
        <NavBar />
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
      </div>
      <Footer />
    </main>
  );
};

export default App;

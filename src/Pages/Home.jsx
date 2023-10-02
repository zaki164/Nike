import { NavBar } from "../components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "../sections";

const Home = () => {
  return (
    <main>
      <div className="custom-container">
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

export default Home;

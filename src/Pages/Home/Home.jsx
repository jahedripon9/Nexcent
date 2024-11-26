import CallToAction from "../CallToAction/CallToAction"; // Section for user actions like subscribing or signing up
import Community from "../Community/Community"; // Section showcasing community engagement or testimonials
import Feature from "../Features/Features"; // Section highlighting the primary features of the product/service
import Feature1 from "../Features/Features1"; // Additional feature highlights (secondary features)
import Hero from "../Hero/Hero"; // Hero section, typically the main banner or introduction
import NewMarketing from "../NewMarketing/NewMarketing"; // Section for showcasing new marketing strategies or campaigns
import Numbers from "../Numbers/Numbers"; // Section for numerical stats or achievements
import OurClient from "../OurClient/OurClient"; // Section displaying client logos or partnerships
import ProductList from "../Product List/ProductList"; // Section listing all available products

const Home = () => {
  return (
    <div className="container mx-auto ">
      <Hero /> {/* Main introductory banner or top section */}
      <OurClient /> {/* Client logos or partner showcase */}
      <Community /> {/* Community interaction or testimonial display */}
      <Feature /> {/* Highlights of primary features */}
      <Numbers /> {/* Statistics or numerical achievements */}
      <Feature1 /> {/* Additional or secondary feature details */}
      <ProductList /> {/* Display of all products available */}
      <NewMarketing /> {/* Information about new marketing campaigns */}
      <CallToAction /> {/* Section encouraging user engagement */}
    </div>
  );
};

export default Home;

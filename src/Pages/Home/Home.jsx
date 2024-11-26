import CallToAction from "../CallToAction/CallToAction";
import Community from "../Community/Community";
import Feature from "../Features/Features";
import Feature1 from "../Features/Features1";
import Hero from "../Hero/Hero";
import NewMarketing from "../NewMarketing/NewMarketing";
import Numbers from "../Numbers/Numbers";
import OurClient from "../OurClient/OurClient";
import ProductList from "../Product List/ProductList";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <Hero />
      <OurClient />
      <Community />
      <Feature />
      <Numbers />
      <Feature1 />
      <ProductList />
      <NewMarketing />
      <CallToAction />
    </div>
  );
};

export default Home;

{/**Import custom component */}
import IntroPollinators from "../components/IntroPollinators";
import IntroProject from "../components/IntroProject";
import AmericanMap from "../components/AmericanMap";
import AmericanMapLeaflet from "../components/AmericanMapLeaflet";

const Home = () => {
  return (
    <>
    <IntroPollinators/>
    <IntroProject/>
    <AmericanMap/>
    <AmericanMapLeaflet/>
    </>
  )
}

export default Home;
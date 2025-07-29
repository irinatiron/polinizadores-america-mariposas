{/**Import custom component */}
import IntroPollinators from "../components/IntroPollinators";
import IntroProject from "../components/IntroProject";
import AmericanMap from "../components/AmericanMap";
import AmericanMapLeaflet from "../components/AmericanMapLeaflet";
import ButterflyVideoLoop from "../components/ButterflyVideoLoop";


const Home = () => {
  return (
    <>
    <ButterflyVideoLoop/>
    <IntroPollinators/>
    <IntroProject/>
    {/*<AmericanMap/>*/}
    <AmericanMapLeaflet/>
    </>
  )
}

export default Home;
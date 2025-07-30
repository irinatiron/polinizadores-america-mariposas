{/**Import custom component */}
import IntroPollinators from "../components/IntroPollinators";
import IntroProject from "../components/IntroProject";
import AmericanMapLeaflet from "../components/AmericanMapLeaflet";
import ButterflyVideoLoop from "../components/ButterflyVideoLoop";
import ButtonPollinatorsProject from "../components/ButtonPollinatorsProject";


const Home = () => {
  return (
    <>
    <ButterflyVideoLoop/>
    <IntroPollinators/>
    <IntroProject/>
    <ButtonPollinatorsProject/>
    <AmericanMapLeaflet/>
    </>
  )
}

export default Home;
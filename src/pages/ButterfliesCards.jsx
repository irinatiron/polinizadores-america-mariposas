import CardFrontButterflies from '../components/CardFrontButterflies';
import AddButterflyBtn from '../components/cards/AddButterflyButton';

const ButterfliesCards = () => {
  return (
    <>
      <div className="content-btn">
        <h2>Fichas de las mariposas</h2>
        <AddButterflyBtn></AddButterflyBtn>
      </div>

      <CardFrontButterflies />
    </>
  )
}

export default ButterfliesCards;
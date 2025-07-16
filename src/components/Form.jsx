import './Form.css';

const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="input-name">Nombre:</label>
        <input type="text" id="input-name" name="name" placeholder="Nombre de la mariposa" required></input>

        <label htmlFor="input-order">Orden:</label>
        <input type="text" id="input-order" name="order" placeholder="Orden" required></input>

        <label htmlFor="input-family">Familia:</label>
        <input type="text" id="input-family" name="family" placeholder="Familia" required></input>

        <label htmlFor="input-color">Color:</label>
        <input type="text" id="input-color" name="color" placeholder="Color"></input>

        <label htmlFor="input-size">Tamaño:</label>
        <input type="text" id="input-size" name="size" placeholder="Tamaño"></input>

        <label htmlFor="input-origin">Origen:</label>
        <input type="text" id="input-origin" name="origin" placeholder="Origen"></input>

        <label htmlFor="input-location">Localización:</label>
        <input type="text" id="input-location" name="location" placeholder="Localización"></input>

        <label htmlFor="input-habitat">Hábitat:</label>
        <input type="text" id="input-habitat" name="habitat" placeholder="Hábitat"></input>

        <label htmlFor="input-plants">Plantas visitadas:</label>
        <input type="text" id="input-plants" name="plants" placeholder="Plantas visitadas"></input>

        <label htmlFor="input-cycle">Ciclo de vida:</label>
        <input type="text" id="input-cycle" name="cycle" placeholder="Ciclo de vida"></input>

        <label htmlFor="input-img">Imagen:</label>
        <input type="url" id="input-img" name="img" placeholder="Imagen"></input>

        <label htmlFor="input-fenology">Fenología:</label>
        <input type="text" id="input-fenology" name="fenology" placeholder="Fenología"></input>

        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default Form;
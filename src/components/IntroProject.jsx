// Step 1: Import the CSS file
import './IntroProject.css';

// Step 2: Create the intro-project component
const IntroProject = () => {
  return (
    <div className="intro-project">
      <h2 className="project-title">
        Nuestro proyecto
      </h2>
      <p className="project-description">
        Este proyecto nace con el objetivo de dar visibilidad al papel fundamental que juegan las especies polinizadoras, 
        en especial las mariposas, en el equilibrio de los ecosistemas y en nuestra seguridad alimentaria. A través de 
        esta web, queremos ofrecer información clara, atractiva y basada en datos científicos sobre cómo funcionan estos 
        procesos y por qué es crucial proteger a estas especies. En un contexto de pérdida de hábitats, uso intensivo de 
        pesticidas y cambio climático, las poblaciones de polinizadores están disminuyendo. Creemos que la educación y la 
        sensibilización son claves para fomentar acciones de conservación, tanto a nivel individual como colectivo.
      </p>
    </div>
  );
};

export default IntroProject;
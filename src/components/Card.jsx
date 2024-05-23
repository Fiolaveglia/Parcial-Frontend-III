const Card = ({ persona }) => {
    return (
      <div className="card">
        <h3>Hola {persona.nombre}!</h3>
        <h3>Tu animal favorito es: {persona.animalFavorito}.</h3>
      </div>
    );
  };

  
  export default Card;
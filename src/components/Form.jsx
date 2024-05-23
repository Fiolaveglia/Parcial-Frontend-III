import { useState } from "react";
import Card from "./Card";

const Form = () => {
    const [persona, setPersona] = useState({
        nombre: '', 
        animalFavorito: ''
    });
    const [exito, setExito] = useState(false);
    const [error, setError] = useState('');

    const handleName = (e) => setPersona({...persona, nombre: e.target.value})
    const handleFavAnimal = (e) => setPersona({...persona, animalFavorito: e.target.value})
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const nombreValido = persona.nombre.trim().length >= 3 && !persona.nombre.startsWith('');
        const animalValido = persona.animalFavorito.length > 5;

        setError(!nombreValido);

        if (nombreValido && animalValido) {
            setExito(true);
            setError(false) 
        } else {
            setExito(false);
            setError('Por favor chequea que la información sea la correcta')
        }
        
    }

    return (
        <>
            {exito ? (<Card persona={persona} />) : (
                <form onSubmit={handleSubmit}>
                    <label>Nombre: </label>
                    <input type="text" onChange={handleName} />
                    <label>Animal favorito:</label>
                    <input type="text" onChange={handleFavAnimal} />
                    <button>Enviar</button>
                </form>
            )}

            {error && ( <p style={{ color: "red" }}> {error} </p> )}
        </>
    );
};

export default Form;


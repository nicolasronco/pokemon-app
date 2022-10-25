import '../styles/BackButton.css';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  const redirectToPokemons = () => {
    return navigate(-1);
  };

  return (
    <div className="back-to-pokemons">
      <button
        className= 'back-button'
        type= 'button'
        value= 'Back'
        onClick= {() => redirectToPokemons()}
      >Back</button>
    </div>
  );
}

export default BackButton;
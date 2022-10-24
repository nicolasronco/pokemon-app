import '../styles/Banner.css';
import logo from '../assets/pokemon_logo.png';

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt='Pokemon app' className='pokemon-logo'/>
    </div>
  );
}

export default Banner;

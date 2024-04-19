import { Link } from 'react-router-dom';
import '../navigation/NavBar.css';
import CartWidget from '../CartWidget';

export default function NavBar() {
  return (
    <>
    <nav>
        <div>
            <div className='navbar container'>
                <button>
                <Link to={'/'}><a>Inicio</a></Link>
                </button>
                <button>
                <Link to={'/products'}><a>Productos</a></Link>
                </button>
                <button>
                <Link to={'/contact'}><a>Contacto</a></Link>
                </button>
                <button>
                <Link to={'/carrito'}><a><CartWidget /></a></Link>
                </button>
                
            </div>
        </div>
    </nav>
    </>
  );
}

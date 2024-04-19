import carritoimg from '../assets/img/carrito.png'
import AddOrders from './AddOrders.jsx';

export default function Cartwidget() {
    return (
        <>
            <p>
                <img class='cart' src={carritoimg} width="30px"/>4
                <AddOrders />
            </p>
        </>
    )
}
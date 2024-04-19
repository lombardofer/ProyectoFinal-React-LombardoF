import { sendOrder } from '../firebase/firebase';

export default function AddOrders() {
  const newOrder = {
    buyer: {
      email: 'buyer@gmail.com',
      name: 'Eduardo',
      phone: '1158898899',
    },
    items: [
      {
        id: 8,
        title: 'shoes',
        price: 900,
      },
    ],
    total: 900,
    date: new Date(),
  };

  const handleClick = () => {
    sendOrder(newOrder);
  };

  return (
    <>
      <a onClick={handleClick}> Enviar pedido</a>
    </>
  );
}
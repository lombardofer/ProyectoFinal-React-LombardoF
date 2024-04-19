import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/firebase';
import { useEffect, useState } from 'react';

export default function CategoryComponent() {
  const { catName } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>Category Component {catName}</div>
    </>
  );
}

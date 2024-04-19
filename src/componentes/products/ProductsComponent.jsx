import { useEffect, useState } from 'react';
import {
  filterMaxPrice,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../../firebase/firebase.js';

export default function ProductsComponent() {
  const [myProds, setMyProds] = useState([]);

  async function obtenerProductos() {
    const productos = await getProducts();
    /* const productos = await filterMaxPrice(7); */
    setMyProds(productos);
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  const handleUpdate = async (id) => {
    await updateProduct(id, { price: 14 });
    //para actualizar el DOM
    obtenerProductos();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    //actualizo el DOM
    obtenerProductos();
  };

  return (
    <>
        <div>
          <section style={{ display: 'flex', gap: 2 }}>
            {myProds.map((prod) => (
              <article
                key={prod.id}
                style={{ border: '1px solid white', padding: 10 }}
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{prod.title}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio ${prod.price}</li>
                  </ul>
                  <div class="card-body container-fluid">
                    <a href="#" class="card-link"><button onClick={() => handleUpdate(prod.id)}>
                      Agregar al carrito
                    </button></a>
                    <button onClick={() => handleDelete(prod.id)}>
                      Eliminar este producto
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
    </>
  );
}

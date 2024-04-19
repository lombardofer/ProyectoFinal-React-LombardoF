// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/* obtener todos los productos */
export async function getProducts() {
  const response = await getDocs(collection(db, 'products'));
  console.log(response); //response es una coleccion y es iterable
  const listaProds = [];
  response.forEach((docu) => listaProds.push({ id: docu.id, ...docu.data() }));
  return listaProds;
}

/* consultas especificas o filtros  */
export async function filterMaxPrice(maxPrice) {
  //creamos una query especifica
  const q = query(collection(db, 'products'), where('price', '<', maxPrice));
  //ejecutar la query
  const querySnapshot = await getDocs(q);
  //procesamos los resultados
  const listaFiltro = [];
  querySnapshot.forEach((docu) =>
    listaFiltro.push({ id: docu.id, ...docu.data() })
  );
  return listaFiltro;
}

//enviar una orden de pedido a nuestra coleccion 'orders'
export async function sendOrder(order) {
  const ordersCollection = collection(db, 'orders');
  const docRef = await addDoc(ordersCollection, order);
  console.log('docRef generado: ' + JSON.stringify(docRef));
  console.log('id generado: ' + docRef.id);
  alert('Nuevo pedido recibido, id: ' + docRef.id);
}

//modificar un producto
export async function updateProduct(id, toUpdate) {
  try {
    await updateDoc(doc(db, 'products', id), toUpdate);
  } catch (error) {
    console.log('Error: ' + error);
  }
}

//eliminar un producto
export async function deleteProduct(id) {
  try {
    await deleteDoc(doc(db, 'products', id));
  } catch (error) {
    console.log('Error: ' + error);
  }
}

//imprimir variable de entorno que se encuentra en .env.local
console.log(import.meta.env.VITE_USERNAME);

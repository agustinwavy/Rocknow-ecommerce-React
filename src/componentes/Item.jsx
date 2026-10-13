import './Item.css';
import Contador from './Contador';


function Item({ nombre, precio, stock, imagen }) {

  const esUrlWeb = imagen && (imagen.startsWith('http://') || imagen.startsWith('https://'));
  
  const imagenUrl = esUrlWeb 
    ? imagen 
    : new URL(`../assets/${imagen}`, import.meta.url).href;
    
  return (
    <div className="tarjeta-guitarra">
      <img src={imagen} alt={nombre} className="tarjeta-img" />
      <h3>{nombre}</h3>
      <p>ARS ${precio.toLocaleString('es-AR')}</p>
      <p>Stock: {stock}</p>
      <Contador stock={stock} />
      <button className="tarjeta-btn">Agregar al carrito</button>
    </div>
  );
}

export default Item;
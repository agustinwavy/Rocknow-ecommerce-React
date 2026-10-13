import {useState, useEffect} from 'react';
import Item from './Item';
import Formulario from './Formulario';
import './ItemListC.css';
import bannerImg from '../assets/banner.jpg';

function ItemListC() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/productos.json')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos)
            })
            .catch((error) => {
                console.error('Error al cargar los productos:', error);
            });
    }, []);

    const agregarProducto = (nuevoProducto) => {
        setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
    };


    return (
        <>
        <img 
            src={bannerImg}
            alt="Banner Rocknow" 
            style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '30px' }} 
        />
        
        <div id="catalogo" style={{ width: '100%', padding: '40px 20px', textAlign: 'center' }}>
            <h2 className="h2">
                Guitarras
            </h2>

            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '24px', 
                justifyContent: 'center', 
                alignItems: 'stretch',
                maxWidth: '1200px',
                margin: '0 auto' 
            }}>
                {productos.map((guitarra) => (
                    <Item
                        key={guitarra.id}
                        nombre={guitarra.nombre}
                        precio={guitarra.precio}
                        stock={guitarra.stock}
                        imagen={guitarra.imagen}
                    />
                ))}
            </div>
            <Formulario agregarProducto={agregarProducto} />
        </div>
        </>
    );
}

export default ItemListC;
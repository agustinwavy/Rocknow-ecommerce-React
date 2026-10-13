import { useState } from 'react';

function Formulario({ agregarProducto }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [imagenArchivo, setImagenArchivo] = useState(null);
  const [cargando, setCargando] = useState(false);

  const API_KEY_IMGBB = '7a01cb834d1e3a4c458f4b1026fc2cae'; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imagenArchivo) {
      alert('Por favor seleccioná una imagen');
      return;
    }

    setCargando(true);

    console.log('Subiendo imagen a Imgbb...');

    try {
      const formData = new FormData();
      formData.append('image', imagenArchivo);

      const respuesta = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY_IMGBB}`, {
        method: 'POST',
        body: formData,
      });

      const datosImgbb = await respuesta.json();

      if (datosImgbb.success) {
        const urlImagen = datosImgbb.data.url;

        console.log('Imagen subida con éxito.');
        console.log(`URL: ${urlImagen}`);

        const objetoEnvio = {
          id: String(Date.now()),
          nombre,
          precio,
          stock,
          urlImagen
        };

        console.log('Enviando los siguientes datos COMPLETOS a la API:', objetoEnvio);

        if (agregarProducto) {
          agregarProducto({
            id: objetoEnvio.id,
            nombre: objetoEnvio.nombre,
            precio: Number(objetoEnvio.precio),
            stock: Number(objetoEnvio.stock),
            imagen: urlImagen
          });
        }

        setNombre('');
        setPrecio('');
        setStock('');
        setImagenArchivo(null);
        e.target.reset();
      } else {
        console.error('Error al subir la imagen a ImgBB:', datosImgbb);
      }
    } catch (error) {
      console.error('Error en la comunicación con ImgBB:', error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{
      maxWidth: '450px',
      margin: '40px auto',
      padding: '24px',
      backgroundColor: '#1a1a1a',
      borderRadius: '12px',
      border: '1px solid #2d2d2d',
      textAlign: 'left',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
    }}>
      <h3 style={{
        textAlign: 'center',
        color: '#C86414',
        marginBottom: '20px',
        fontSize: '1.2rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Agregar Nuevo Producto
      </h3>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#ccc' }}>
            Nombre del producto:
          </label>
          <input 
            type="text" 
            required 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Ej: Guitarra Acustica"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #444',
              backgroundColor: '#262626',
              color: '#fff',
              outline: 'none'
            }} 
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#ccc' }}>
            Precio:
          </label>
          <input 
            type="number" 
            required 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
            placeholder="Ej: 1111"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #444',
              backgroundColor: '#262626',
              color: '#fff',
              outline: 'none'
            }} 
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#ccc' }}>
            Stock:
          </label>
          <input 
            type="number" 
            required 
            value={stock} 
            onChange={(e) => setStock(e.target.value)} 
            placeholder="Ej: 11"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #444',
              backgroundColor: '#262626',
              color: '#fff',
              outline: 'none'
            }} 
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#ccc' }}>
            Imagen del producto:
          </label>
          <input 
            type="file" 
            accept="image/*" 
            required 
            onChange={(e) => setImagenArchivo(e.target.files[0])} 
            style={{ color: '#aaa', fontSize: '0.85rem', cursor: 'pointer' }} 
          />
        </div>

        <button 
          type="submit" 
          disabled={cargando} 
          style={{
            padding: '12px',
            backgroundColor: cargando ? '#888' : '#C86414',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: cargando ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            marginTop: '10px',
            transition: 'background-color 0.2s'
          }}
        >
          {cargando ? 'Subiendo imagen...' : 'Agregar Producto'}
        </button>
      </form>
    </div>
  );
}

export default Formulario;
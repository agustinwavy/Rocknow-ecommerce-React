function Footer() {
    const equipo=[
        {
            id:1,
            nombre:"Rosnow Yagus",
            puesto:"CEO",
            foto:'https://lh3.googleusercontent.com/a/ACg8ocKWREW4ST0zH4y6yTrKQKnmIQbb7zy-S98STecpwPx9RpgUblN5=s60-c'
        },
        {
            id:2,
            nombre:"Carolina Soleno",
            puesto:"Desarroladora Backend",
            foto:'https://w7.pngwing.com/pngs/141/816/png-transparent-windows-live-messenger-msn-messenger-microsoft-microsoft-purple-violet-computer-program-thumbnail.png'
        },
        {
            id:3,
            nombre:"Delfina Cuti",
            puesto:"Desarrolladora Web",
            foto:'https://i.pravatar.cc/150?img=9'
        }
    ];

    return (
        <footer style={{
        backgroundColor: '#161616',
        color: '#F5F5F7',
        padding: '40px 20px 20px',
        borderTop: '1px solid #C86414',
        marginTop: '60px',
        textAlign: 'center'
        }}>
        <div id="equipo" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <div style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#C86414', fontSize: '1.3rem', marginBottom: '8px', fontWeight: '600' }}>
                Rocknow Guitarras
            </h3>
            <p style={{ color: '#A0A0A0', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
                Acompañando a músicos con instrumentos de alta calidad, calibración artesanal y asesoramiento personalizado.
            </p>
            </div>

            <h4 style={{ marginBottom: '20px', fontSize: '1rem', fontWeight: '500', color: '#D1D1D1' }}>
            Nuestro Equipo
            </h4>
            
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '32px'
            }}>
            {equipo.map((persona) => (
                <div key={persona.id} style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #2D2D2D',
                borderRadius: '10px',
                padding: '16px',
                width: '180px',
                textAlign: 'center'
                }}>
                <img 
                    src={persona.foto} 
                    alt={persona.nombre} 
                    style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    marginBottom: '10px',
                    border: '2px solid #C86414',
                    objetcFit: 'cover'
                    }} 
                />
                <h5 style={{ margin: '4px 0', fontSize: '0.95rem', fontWeight: '600', color: '#F5F5F7' }}>
                    {persona.nombre}
                </h5>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#C86414' }}>
                    {persona.puesto}
                </p>
                </div>
            ))}
            </div>

            <p style={{ fontSize: '0.75rem', color: '#666', borderTop: '1px solid #222', paddingTop: '16px', margin: 0 }}>
            © 2026 Rocknow Guitarras. Talento Tech.
            </p>

        </div>
        </footer>
    );
}

export default Footer;
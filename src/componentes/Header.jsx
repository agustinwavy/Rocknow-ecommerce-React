import Nav from './Nav';

function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0, 
      zIndex: 1000,
      backgroundColor: '#161616',
      color: '#F5F5F7',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #C86414'
    }}>
    <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ width: '62px', height: '62px', objectFit: 'contain' }} 
        />
        Rocknow
    </h1>
      <Nav />
    </header>
  );
}

export default Header;
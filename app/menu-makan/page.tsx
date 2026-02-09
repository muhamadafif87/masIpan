export default function MenuMakanPage() {
  return (
    <main style={{ padding: 40, maxWidth: 800, margin: 'auto' }}>
      <h1 style={{ color: '#ff1493' }}>🍱 Layanan Makan Bergizi Gratis</h1>

      <p style={{ margin: '15px 0' }}>
        Tersedia berbagai menu rumahan sederhana.
        Bisa dipesan <b>kapan pun</b> dengan klik WhatsApp.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
          marginTop: 30,
        }}
      >
        {menuItem('🍚 Nasi Goreng')}
        {menuItem('🥚 Telur Balado')}
        {menuItem('🍜 Mie Goreng Spesial')}
        {menuItem('🍜 Mie Bangladesh')}
        {menuItem('🌶️ Seblak')}
        {menuItem('🥗 Nasi Sayur Oseng')}
        {menuItem('🥤 Jus Aneka Rasa')}
        {menuItem('🍗 Nasi Ayam Rica-rica')}
      </div>

      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <a
          href="https://wa.me/6281312292782?text=Halo%20Ivan,%20aku%20mau%20pesan%20makanan%20bergizi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📞 Pesan via WhatsApp
        </a>
      </div>

      <p style={{ marginTop: 30, fontSize: 14, opacity: 0.8 }}>
        *Menu dapat berubah sewaktu-waktu. Layanan ini bersifat sosial & fleksibel.
      </p>
    </main>
  )
}

/* helper component */
function menuItem(name: string) {
  return (
    <div
      style={{
        background: '#fff',
        padding: 20,
        borderRadius: 15,
        boxShadow: '0 10px 25px rgba(255,105,180,0.2)',
      }}
    >
      <h3 style={{ color: '#ff1493', marginBottom: 10 }}>{name}</h3>

      <a
        href={`https://wa.me/6281312292782?text=Halo%20Ivan,%20aku%20mau%20pesan%20${encodeURIComponent(
          name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Pesan Menu Ini
      </a>
    </div>
  )
}
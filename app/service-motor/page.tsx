export default function ServiceMotorPage() {
  return (
    <main style={{ padding: 40, maxWidth: 700, margin: 'auto' }}>
      <h1 style={{ color: '#ff1493' }}>🏍️ Layanan Service Motor</h1>

      <p style={{ margin: '15px 0' }}>
        Motor bermasalah? Tenang. Pilih salah satu opsi di bawah,
        tinggal klik aja.
      </p>

      <div style={{ display: 'grid', gap: 20, marginTop: 30 }}>

        {/* WA SERVICE */}
        <a
          href="https://wa.me/628XXXXXXXXXX?text=Ivan%20servisin%20dong,%20motor%20saya%20butuh%20dibantu"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📞 Ivan, servisin dong
        </a>

        {/* MAPS KARTASURA */}
        <a
          href="https://www.google.com/maps/search/bengkel+motor+kartasura"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📍 Bengkel Terdekat Kartasura
        </a>

        {/* MAPS COLOMADU */}
        <a
          href="https://www.google.com/maps/search/bengkel+motor+colomadu"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📍 Bengkel Terdekat Colomadu
        </a>

      </div>

      <p style={{ marginTop: 40, fontSize: 14, opacity: 0.8 }}>
        *Layanan ini membantu menghubungkan kamu dengan mekanik
        atau bengkel terdekat di wilayah Jawa Tengah.
      </p>
    </main>
  )
}
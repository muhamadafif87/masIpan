export default function TerapiPage() {
  return (
    <main style={{ padding: 40, maxWidth: 700, margin: 'auto' }}>
      <h1 style={{ color: '#ff1493' }}>💆 Layanan Terapi Cape</h1>

      <p style={{ margin: '15px 0' }}>
        Layanan relaksasi sederhana untuk membantu mengurangi rasa lelah
        dan penat secara mental maupun fisik.
      </p>

      <div
        style={{
          background: '#fff',
          padding: 20,
          borderRadius: 15,
          boxShadow: '0 10px 25px rgba(255,105,180,0.2)',
          marginTop: 20,
        }}
      >
        <h3 style={{ color: '#ff1493' }}>📌 Ketentuan Layanan</h3>
        <ul style={{ marginTop: 10, lineHeight: '1.8em' }}>
          <li>⏳ <b>Tidak menerima pemesanan mendadak</b></li>
          <li>📅 Jadwal hanya bisa melalui <b>reservasi & janji temu</b></li>
          <li>🤝 Sudah include <b>ketemu & quality time santai</b></li>
          <li>💬 Dibicarakan dan disepakati bersama terlebih dahulu</li>
        </ul>
      </div>

      <div style={{ marginTop: 30 }}>
        <a
          href="https://wa.me/6281312292782?text=Halo%20Ivan,%20aku%20mau%20reservasi%20terapi%20cape.%20Kita%20bisa%20janjian%20ketemu%20dulu%20ya"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📞 Reservasi & Janjian Dulu
        </a>
      </div>

      <p style={{ marginTop: 30, fontSize: 14, opacity: 0.8 }}>
        *Layanan ini bersifat personal, santai, dan berdasarkan kesepakatan bersama.
      </p>
    </main>
  )
}
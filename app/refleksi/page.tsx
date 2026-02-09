import Link from 'next/link'

export default function RefleksiPage() {
  return (
    <main style={{ padding: 40, maxWidth: 700, margin: 'auto' }}>
      <h1 style={{ color: '#ff1493' }}>🌸 Refleksi Diri</h1>

      <p style={{ margin: '15px 0' }}>
        Ruang untuk menenangkan hati, mengingat Allah,
        dan merenungi kehidupan sesuai tuntunan Rasulullah ﷺ.
      </p>

      <ul style={{ lineHeight: '2em' }}>
        <li>
          📖{' '}
          <a
            href="https://quran.kemenag.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Baca Al-Qur’an Indonesia
          </a>
        </li>

        <li>
          🕌{' '}
          <a
            href="https://jadwalsholat.kemenag.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Jadwal Sholat Kota Solo
          </a>
        </li>

        <li>
          🌿{' '}
          <a
            href="https://hadits.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Quotes Sunnah Nabi ﷺ
          </a>
        </li>
      </ul>

      <p style={{ marginTop: 30, fontStyle: 'italic' }}>
        “Sesungguhnya dalam mengingat Allah hati menjadi tenang.”  
        <br />— QS. Ar-Ra’d: 28
      </p>
    </main>
  )
}
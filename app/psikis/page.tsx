'use client'

import { useState } from 'react'

export default function PsikisPage() {
  const [text, setText] = useState('')
  const [reply, setReply] = useState('')

  const handleSubmit = () => {
    if (!text.trim()) return

    // SIMULASI JAWABAN AI (AMAN)
    setReply(
      `Terima kasih sudah mau cerita 🤍  
Apa yang kamu rasakan itu valid.  
Coba tarik napas pelan-pelan, kamu tidak sendirian.  
Kalau mau, kamu bisa ceritakan bagian mana yang paling berat buat kamu sekarang.`
    )
  }

  return (
    <main style={{ padding: 40, maxWidth: 800, margin: 'auto' }}>
      <h1 style={{ color: '#ff1493' }}>🧠 Layanan Psikis</h1>

      <p style={{ margin: '10px 0 20px' }}>
        Tempat aman untuk bercerita.  
        Jawaban diberikan oleh AI secara empatik & reflektif.
      </p>

      <textarea
        placeholder="Tulis ceritamu di sini..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        style={{
          width: '100%',
          padding: 15,
          borderRadius: 15,
          border: '1px solid #ffb6c1',
          outline: 'none',
        }}
      />

      <button
        onClick={handleSubmit}
        className="btn"
        style={{ marginTop: 15 }}
      >
        Kirim Cerita
      </button>

      {reply && (
        <div
          style={{
            marginTop: 30,
            background: '#fff',
            padding: 20,
            borderRadius: 15,
            boxShadow: '0 10px 25px rgba(255,105,180,0.2)',
            whiteSpace: 'pre-line',
          }}
        >
          <h3 style={{ color: '#ff1493' }}>🤖 Respon AI</h3>
          <p style={{ marginTop: 10 }}>{reply}</p>
        </div>
      )}

      <p style={{ marginTop: 30, fontSize: 13, opacity: 0.7 }}>
        *Layanan ini bukan pengganti bang Ipan sebagai tenaga profesional kesehatan mental.
      </p>
    </main>
  )
}
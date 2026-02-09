'use client'

import Image from 'next/image'
import { useState } from 'react'

type Category = 'Anime' | 'Romance' | 'Action' | 'Thriller'

const movies: Record<Category, { title: string; poster: string }[]> = {
  Anime: [
    {
      title: 'Your Name',
      poster: 'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg',
    },
    {
      title: 'Spirited Away',
      poster: 'https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg',
    },
  ],
  Romance: [
    {
      title: 'La La Land',
      poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    },
    {
      title: 'Titanic',
      poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    },
  ],
  Action: [
    {
      title: 'Interstellar',
      poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    },
    {
      title: 'John Wick',
      poster: 'https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg',
    },
  ],
  Thriller: [
    {
      title: 'Joker',
      poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    },
    {
      title: 'Parasite',
      poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    },
  ],
}

export default function NontonBarengPage() {
  const [category, setCategory] = useState<Category>('Anime')

  return (
    <main style={{ padding: 40, maxWidth: 1100, margin: 'auto' }}>
      <h1 style={{ color: '#ff1493' }}>🎬 Nonton Bareng</h1>
      <p style={{ margin: '10px 0 25px' }}>
        Pilih film favoritmu dan tentukan mau nonton online atau offline.
      </p>

      {/* KATEGORI */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {(Object.keys(movies) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              background: category === cat ? '#ff1493' : '#ffb6c1',
              color: 'white',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LIST FILM */}
      <div
        style={{
          marginTop: 25,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 25,
        }}
      >
        {movies[category].map((m) => (
          <div
            key={m.title}
            style={{
              background: '#fff',
              borderRadius: 15,
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(255,105,180,0.2)',
              textAlign: 'center',
            }}
          >
            <Image
              src={m.poster}
              alt={m.title}
              width={300}
              height={450}
              style={{ width: '100%', height: 'auto' }}
            />
            <h4 style={{ padding: 10, color: '#ff1493' }}>{m.title}</h4>
          </div>
        ))}
      </div>

      {/* OPSI NONTON */}
      <h2 style={{ marginTop: 50 }}>🍿 Pilihan Nonton</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          marginTop: 20,
        }}
      >
        {/* ONLINE */}
        <div style={boxStyle}>
          <h3>📺 Nonton Online</h3>
          <p style={{ marginTop: 10 }}>
            Layanan streaming premium <b>belum tersedia</b>.
          </p>
          <p style={{ fontStyle: 'italic', opacity: 0.7 }}>🔜 Segera ada</p>
        </div>

        {/* OFFLINE */}
        <div style={boxStyle}>
          <h3>🏢 Nonton Offline (XXI)</h3>
          <p style={{ margin: '10px 0' }}>
            Cek jadwal bioskop XXI terdekat dan janjian nonton bareng.
          </p>
          <a
            href="https://www.21cineplex.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            🎟️ Lihat Jadwal XXI
          </a>
        </div>
      </div>

      <p style={{ marginTop: 40, fontSize: 14, opacity: 0.8 }}>
        *Nonton dilakukan berdasarkan kesepakatan bersama.
      </p>
    </main>
  )
}

const boxStyle = {
  background: '#fff',
  padding: 20,
  borderRadius: 15,
  boxShadow: '0 10px 25px rgba(255,105,180,0.2)',
}
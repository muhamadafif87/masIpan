"use client";

import Navbar from './components/navbar'
import ServiceCard from './components/serviceCard'

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h2>Layanan Spesial, Santai, dan Humanis 💖</h2>
        <p>Cukup bilang: Mau Mau Ajaa</p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert('Email terdaftar 💖')
          }}
        >
          <input type="email" placeholder="Email kamu..." required />
          <button className="btn">Daftar</button>
        </form>
      </section>

      <section className="services">
        <ServiceCard
          title="🌸 Refleksi Diri"
          desc="Siraman rohani dan refleksi hidup"
          href="/refleksi"
        />

        <ServiceCard
          title="💆 Terapi Cape"
          desc="Pijat tangan 15 menit"
          href="https://wa.me/6281312292782"
          external
        />

        <ServiceCard
          title="🏍️ Service Motor"
          desc="Service motor panggilan"
          href="https://wa.me/6281312292782"
          external
        />

        <ServiceCard
          title="🎬 Nonton Bareng"
          desc="Semua genre termasuk anime"
          href="https://linktr.ee/nobar_rizvanda"
          external
        />

        <ServiceCard
          title="🍱 Makan Bergizi Gratis"
          desc="Menu sehat harian tanpa biaya"
          href="/menu-makan"
        />
      </section>

      <style jsx>{`
        .hero {
          padding: 70px 20px;
          text-align: center;
          background: linear-gradient(135deg, #ffb6c1, #ffc0cb);
          color: white;
        }
        form {
          margin-top: 20px;
        }
        input {
          padding: 10px;
          border-radius: 15px;
          border: none;
          margin-right: 10px;
        }
        .services {
          padding: 60px 30px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }
      `}</style>
    </>
  )
}
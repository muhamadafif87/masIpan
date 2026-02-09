"use client";

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Rizvanda Mau Mau Ajaa</h1>
      <nav>
        <Link href="/refleksi">Refleksi</Link>
        <Link href="/menu-makan">Makan Bergizi</Link>
      </nav>

      <style jsx>{`
        .navbar {
          background: #ff69b4;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          color: white;
        }
        nav a {
          margin-left: 20px;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </header>
  )
}
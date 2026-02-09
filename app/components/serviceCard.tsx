"use client";
import Link from 'next/link'

interface Props {
  title: string
  desc: string
  href: string
  external?: boolean
}

export default function ServiceCard({
  title,
  desc,
  href,
  external = false,
}: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>

      {external ? (
        <a href={href} target="_blank" className="btn">
          Buka
        </a>
      ) : (
        <Link href={href} className="btn">
          Buka
        </Link>
      )}

      <style jsx>{`
        .card {
          background: white;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(255, 105, 180, 0.2);
        }
        h3 {
          color: #ff1493;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  )
}
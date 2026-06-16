import React from 'react'

export default function MovieCard({ title = 'Película', image, tickets = 0 }) {
  const price = 4500
  const qty = Number(tickets) || 0
  const total = Number(price) * qty

  const fmt = (v) => Number(v).toFixed(2)

  return (
    <div style={{border: '1px solid #ddd', padding: 16, borderRadius: 8, maxWidth: 420, margin: '0 auto'}}>
      <h2 style={{marginTop: 0}}>{title}</h2>
      {image && <img src={image} alt={title} style={{width: '100%', height: 'auto', borderRadius: 6}} />}
      <p><strong>Precio por entrada:</strong> ${fmt(price)}</p>
      <p><strong>Número de entradas:</strong> {qty}</p>
      <p><strong>Total a pagar:</strong> ${fmt(total)}</p>
    </div>
  )
}

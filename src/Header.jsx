import React from 'react'

export default function Header({ name = 'CineEstrella', tagline = '¡La mejor cartelera!' }) {
  return (
    <header style={{textAlign: 'center', padding: '1rem 0'}}>
      <h1 style={{margin: 0, color: '#0a58ca'}}>{name}</h1>
      <p style={{margin: '0.25rem 0 0', fontStyle: 'italic'}}>{tagline}</p>
    </header>
  )
}

import Layout from '../components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Upload() {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [genre, setGenre] = useState('')
  const router = useRouter()

  async function submit(e) {
    e.preventDefault()
    if (!title || !artist || !releaseDate) return alert('Fill required fields')
    const payload = { title, artist, releaseDate, genre }
    await fetch('/api/tracks', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    router.push('/dashboard')
  }

  return (
    <Layout>
      <div style={{maxWidth:720}} className="card">
        <h3>Upload Track (mock)</h3>
        <form onSubmit={submit} style={{display:'grid', gap:8}}>
          <input className="input" placeholder="Track title" value={title} onChange={e=>setTitle(e.target.value)} />
          <input className="input" placeholder="Artist name" value={artist} onChange={e=>setArtist(e.target.value)} />
          <input className="input" placeholder="Release date (YYYY-MM-DD)" value={releaseDate} onChange={e=>setReleaseDate(e.target.value)} />
          <input className="input" placeholder="Genre" value={genre} onChange={e=>setGenre(e.target.value)} />
          <div style={{display:'flex', gap:8, marginTop:8}}>
            <button className="button" style={{background:'#111827', color:'#fff'}} type="submit">Add Track</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

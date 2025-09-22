import Layout from '../components/Layout'
import TrackTable from '../components/TrackTable'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [tracks, setTracks] = useState([])
  const [q, setQ] = useState('')
  const router = useRouter()

  useEffect(() => {
    const s = typeof window !== 'undefined' && localStorage.getItem('session')
    if (!s) router.push('/')
    fetchTracks()
  }, [])

  async function fetchTracks() {
    const res = await fetch('/api/tracks')
    const data = await res.json()
    setTracks(data)
  }

  const filtered = tracks.filter(t => {
    if (!q) return true
    const s = q.toLowerCase()
    return t.title.toLowerCase().includes(s) || t.artist.toLowerCase().includes(s) || (t.genre||'').toLowerCase().includes(s)
  })

  return (
    <Layout>
      <div style={{display:'flex', justifyContent:'space-between', gap:12, alignItems:'center'}}>
        <h3>Tracks</h3>
        <div style={{display:'flex', gap:8}}>
          <input className="input" placeholder="Search by title/artist/genre" value={q} onChange={e=>setQ(e.target.value)} />
        </div>
      </div>

      <div style={{marginTop:12}}>
        <TrackTable tracks={filtered} />
      </div>
    </Layout>
  )
}

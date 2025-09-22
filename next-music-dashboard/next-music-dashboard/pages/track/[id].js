import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function TrackDetails() {
  const router = useRouter()
  const { id } = router.query
  const [track, setTrack] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch('/api/tracks/' + id).then(r=>r.json()).then(setTrack)
  }, [id])

  if (!track) return <Layout><div className="card">Loading...</div></Layout>

  return (
    <Layout>
      <div className="card">
        <h3>{track.title}</h3>
        <div><strong>Artist:</strong> {track.artist}</div>
        <div><strong>Release Date:</strong> {new Date(track.releaseDate).toLocaleDateString()}</div>
        <div><strong>Genre:</strong> {track.genre || '-'}</div>
        <div><strong>Status:</strong> {track.status}</div>
        <div style={{marginTop:12}}><button className="button" onClick={()=>router.push('/dashboard')}>Back</button></div>
      </div>
    </Layout>
  )
}

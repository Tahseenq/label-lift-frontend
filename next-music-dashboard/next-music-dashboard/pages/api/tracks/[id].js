// GET /api/tracks/[id]
import { parse } from 'url'
let tracks = null

// A small trick: require main tracks list from sibling file by reading filesystem.
// But since this runs in the same runtime during dev, we'll attempt to read from require cache.
try {
  // Try to import the module to get the same in-memory array (works in dev in Node)
  // Fallback to a local copy if not available.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require('./index.js')
  tracks = mod.tracks || null
} catch (e) {
  // ignored
}

export default function handler(req, res) {
  const id = req.query.id || (req.url && req.url.split('/').pop())
  // If above failed, fallback to reading a minimal set
  if (!tracks) {
    const fallback = [
      { id: '1', title: 'Sunrise', artist: 'A. Khan', releaseDate: '2025-01-10', genre: 'Pop', status: 'Published' },
      { id: '2', title: 'Moonlight', artist: 'B. Ali', releaseDate: '2025-03-22', genre: 'Indie', status: 'Processing' },
    ]
    const found = fallback.find(t=>t.id === id)
    if (!found) return res.status(404).json({message:'Not found'})
    return res.status(200).json(found)
  }
  const found = tracks.find(t=>t.id === id)
  if (!found) return res.status(404).json({message:'Not found'})
  return res.status(200).json(found)
}

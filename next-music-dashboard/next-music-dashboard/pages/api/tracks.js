// Simple in-memory mock API for tracks.
let tracks = [
  { id: '1', title: 'Sunrise', artist: 'A. Khan', releaseDate: '2025-01-10', genre: 'Pop', status: 'Published' },
  { id: '2', title: 'Moonlight', artist: 'B. Ali', releaseDate: '2025-03-22', genre: 'Indie', status: 'Processing' },
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(tracks)
  } else if (req.method === 'POST') {
    const { title, artist, releaseDate, genre } = req.body
    const id = String(Date.now())
    const newTrack = { id, title, artist, releaseDate, genre, status: 'Processing' }
    tracks = [newTrack, ...tracks]
    return res.status(201).json(newTrack)
  } else {
    res.setHeader('Allow', ['GET','POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

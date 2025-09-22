import Link from 'next/link'

export default function TrackTable({ tracks }) {
  return (
    <div className="card">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Release</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tracks.map(t => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.artist}</td>
              <td>{new Date(t.releaseDate).toLocaleDateString()}</td>
              <td>{t.status}</td>
              <td><Link href={`/track/${t.id}`}><a>View</a></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

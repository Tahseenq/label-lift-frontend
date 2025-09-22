import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Login() {
  const router = useRouter()
  const [u, setU] = useState('')
  const [p, setP] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('session')) router.push('/dashboard')
    }
  }, [])

  function submit(e) {
    e.preventDefault()
    if (!u || !p) return alert('Enter username and password')
    localStorage.setItem('session', JSON.stringify({ username: u }))
    router.push('/dashboard')
  }

  return (
    <div className="container">
      <div style={{maxWidth:420, margin:'40px auto'}} className="card">
        <h3>Login (mock)</h3>
        <form onSubmit={submit} style={{display:'grid', gap:8}}>
          <input value={u} onChange={e=>setU(e.target.value)} className="input" placeholder="Username" />
          <input value={p} onChange={e=>setP(e.target.value)} className="input" placeholder="Password" type="password" />
          <button className="button" style={{background:'#111827', color:'#fff'}} type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

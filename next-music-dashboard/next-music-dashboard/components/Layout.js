import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const router = useRouter()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const t = localStorage.getItem('theme') || 'light'
    setTheme(t)
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  function logout() {
    localStorage.removeItem('session')
    router.push('/')
  }

  return (
    <div className="container">
      <div className="header">
        <div>
          <h2>LabelLift — Music Dashboard</h2>
          <div style={{fontSize:12}}>White-label distribution (mock)</div>
        </div>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <Link href="/dashboard"><a className="button card">Dashboard</a></Link>
          <Link href="/upload"><a className="button card">Upload</a></Link>
          <button onClick={toggleTheme} className="button card">Theme: {theme}</button>
          <button onClick={logout} className="button card">Logout</button>
        </div>
      </div>

      <div style={{marginTop:16}}>{children}</div>
    </div>
  )
}

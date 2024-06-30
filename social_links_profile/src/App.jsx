import { useState } from 'react'
import './App.css'
// To run -- npm run dev

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <section className="card">
          
          <div className="card--about">
            <img src="" alt="" />
            <h1 className="card--name">
              Jessica Randall
            </h1>
            <h2 className="card--sub">London, United Kingdom</h2>
            <p className="card--about">"Front-end developer and avid reader"</p>
          </div>
          <ul className="card--list">
            <li className="card--item"><a href="_blank" className="card--link">GitHub</a></li>
            <li className="card--item"><a href="_blank" className="card--link">Frontend Mentor</a></li>
            <li className="card--item"><a href="_blank" className="card--link">Linkedin</a></li>
            <li className="card--item"><a href="_blank" className="card--link">Twitter</a></li>
            <li className="card--item"><a href="_blank" className="card--link">Instagram</a></li>
          </ul>
        </section>
      </div>

    </>
  )
}

export default App

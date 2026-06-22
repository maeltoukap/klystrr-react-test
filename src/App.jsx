import './App.css'

function App() {
  return (
    <main id="home">
      <div className="welcome-card">
        <div className="badge">React + Vite</div>
        <h1>
          Hello &amp; Welcome to<br />
          <span className="brand">Klystrr</span>
        </h1>
        <p className="tagline">
          Your React test environment is up and running.<br />
          Time to build something great with Klystrr!
        </p>
        <div className="divider" />
        <p className="hint">
          Edit <code>src/App.jsx</code> to get started.
        </p>
      </div>
    </main>
  )
}

export default App

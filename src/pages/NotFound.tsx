import { Link } from "react-router-dom"
import { Home, ArrowLeft } from "lucide-react"

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">

        <p className="not-found-label">
          PAGE NOT FOUND
        </p>

        <h1 className="not-found-code">
          404
        </h1>

        <h2>Oops! This page doesn't exist.</h2>

        <p className="not-found-description">
          The page you're looking for may have been moved,
          deleted, or the URL might be incorrect.
        </p>

        <div className="not-found-actions">

          <Link to="/" className="not-found-primary">
            <Home size={18} />
            Back to Home
          </Link>

          <button
            className="not-found-secondary"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>
    </main>
  )
}

export default NotFound
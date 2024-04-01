import "./style.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse links flex flex-column flex-lg-row" id="navbar">
                <div className="navigation navbar-nav">
                    <div className="nav-link">
                        <a href="http://127.0.0.1:8000/admin/dashboard">
                            <div>
                                Real Estate
                            </div>
                        </a>
                    </div>

                    <Link href="http://127.0.0.1:8000#featured-properties" className="nav-link">Feauterd Properties</Link>
                    <Link href="http://127.0.0.1:8000#latest-properties" className="nav-link">Latest Properties</Link>
                    <Link href="http://127.0.0.1:8000#latest-news" className="nav-link">Latest News</Link>
                </div>

                <div className="cta navbar-nav">
                    <Link href="http://127.0.0.1:8000/properties/buy" className="nav-link">Buy</Link>
                    <Link href="http://127.0.0.1:8000/properties/rent" className="nav-link">Rent</Link>
                    <Link href="http://127.0.0.1:8000/properties/sell" className="nav-link">Sell</Link>
                    <Link href="http://127.0.0.1:8000/contact" className="nav-link">Contact Us</Link>
                    <Link href="http://127.0.0.1:8000/user/login" className="nav-link">Sign-in</Link>
                    <Link href="http://127.0.0.1:8000/register" className="nav-link">Register</Link>
                    <Link href="http://127.0.0.1:8000/valuation" className="nav-link">Get a Valuation</Link>
                    <li className="nav-link colors mx-2">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="theme" checked="" />
                            <label className="form-check-label" for="theme">Switch Theme</label>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

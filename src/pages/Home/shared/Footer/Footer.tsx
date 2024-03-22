import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
    return (
        <div>
            <footer>
                <article>
                    <h2>Start with Koolio today.</h2>
                    <button>
                        <p>Sign up Now</p>

                    </button>
                </article>

                <section className="top-section">

                    <ul>
                        <li>
                            <h3>Resources</h3>
                            <Link to='/'>Usage</Link>
                            <Link to='/'>Docs</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Hardware</Link>
                        </li>
                        <li>
                            <h3>Pricing</h3>
                            <Link to='/'>Overview</Link>
                            <Link to='/'>Flexible Data</Link>
                            <Link to='/'>High Volume</Link>
                            <Link to='/'>Enterprise</Link>
                        </li>
                        <li>
                            <h3>Developers</h3>
                            <Link to='/'>Forum</Link>
                            <Link to='/'>Projects</Link>
                            <Link to='/'>Open Source</Link>
                            <Link to='/'>GitHub</Link>
                        </li>
                        <li>
                            <h3>Company</h3>
                            <Link to='/'>About Us</Link>
                            <Link to='/'>Blog</Link>
                            <Link to='/'>Partnerships</Link>
                            <Link to='/'>Careers</Link>
                        </li>
                    </ul>
                </section>

                <section className="bottom-section">© 2024 sarwar</section>
            </footer>

        </div>
    )
}

import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div>
            <footer>
                {/* footer top sections */}
                <article>
                    <h2>Start with Koolio today.</h2>
                    <button>
                        <p>Sign up Now</p>

                    </button>
                </article>

                <section className="top-section">

                    <ul>
                        <li>
                            <h3>Discover</h3>
                            <Link to='/'>Editor's Choice</Link>
                            <Link to='/'>Elevator Move</Link>
                            <Link to='/'>Sound Effect</Link>
                            <Link to='/'>Smart Icon</Link>
                        </li>
                        <li>
                            <h3>Community</h3>
                            <Link to='/'>Blog</Link>
                            <Link to='/'>Creators </Link>
                            <Link to='/'>Cameras</Link>
                            <Link to='/'>Enterprise</Link>
                        </li>
                        <li>
                            <h3>About</h3>
                            <Link to='/'>About us</Link>
                            <Link to='/'>FAQs</Link>
                            <Link to='/'>Cookies Policy</Link>
                            <Link to='/'>API</Link>
                        </li>
                        <li>
                            <h3>Discover</h3>
                            <Link to='/'>Popular Element </Link>
                            <Link to='/'>Upcoming Elevator</Link>
                            <Link to='/'>Audio Quality</Link>
                            <Link to='/'>Careers </Link>
                        </li>
                    </ul>
                </section>

                <section className="bottom-section">&copy;  sarwar 2024</section>
            </footer>

        </div>
    )
}

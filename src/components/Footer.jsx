import { Link } from "react-router-dom";
import lightLogo from '../assets/sliders-logo-white.png'
import ambassadorGames from '../assets/ambassador-games.png'
import { FaGithub, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";


export default function Footer() {
  return(
  <footer>
    <section className="footer-ask">
      <picture>
        <img
          src={lightLogo}
          alt="Sliders logo white"
        />
      </picture>
      <p>Like Sliders?</p>
      <Link target="_blank" to="https://www.buymeacoffee.com/ambassador" >
        <button>{`Buy me a coffee :)`}</button>
      </Link>
    </section>
    <hr style={{marginRight:50, marginLeft:50}}/>
    <section className="footer-details">
      <div style={{marginRight:20}}>
      <picture>
        <img src={ambassadorGames} alt="Ambassador Games Logo" />
      </picture>    
      </div>
      <p>{`Hi, I'm Oliver and I built Sliders. I'm just starting off on my software engineering career. If you're looking to employ someone with my skills, get in touch.`}</p>
    </section>
    <section className="footer-socials">
      <Link aria-label="link to Oliver's GitHub profile" to="https://github.com/OJ423/"><FaGithub size={40}/></Link>
      <Link aria-label="link to Oliver's LinkedIn profile" to="https://www.linkedin.com/in/oliver-smith-software/"><FaLinkedin size={40}/></Link>
      <Link aria-label="Link to Oliver's Twitter profile" to="https://twitter.com/OLJS1/"><FaSquareTwitter size={40} /></Link>
    </section>
  </footer>
  )
}
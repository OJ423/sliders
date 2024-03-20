import { Link, NavLink } from "react-router-dom"
import '../Navbar.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ScheduleIcon from '@mui/icons-material/Schedule';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Icon } from "@mui/material"
import lightLogo from '../assets/sliders-logo-white.png'

export default function Navigation(){

  return(
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <picture>
              <img
                src={lightLogo}
                alt="Sliders logo"
              />
            </picture>
          </Link>
        </div>
        <div className={`nav-elements`}>
          <ul>
            <li><NavLink aria-label="Play the daily game" to="/"><Icon component={ScheduleIcon} /></NavLink></li>
            <li><NavLink aria-label="Practice sliders" to="/practice"><Icon component={AllInclusiveIcon} /></NavLink></li>
            <li><NavLink aria-label="View your stats" to="/stats"><Icon component={QueryStatsIcon}/></NavLink></li>
            <li><NavLink aria-label="How to play sliders" to="/help"><Icon component={QuestionMarkIcon}/></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
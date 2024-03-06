import { NavLink } from "react-router-dom"
import '../Navbar.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ScheduleIcon from '@mui/icons-material/Schedule';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Icon } from "@mui/material"
import lightLogo from '../assets/sliders-logo-white.png'
import darkLogo from '../assets/sliders-logo-black.png'

export default function Navigation(){

  return(
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <picture>
            <source
              srcSet={lightLogo}
              media="(prefers-color-scheme: dark)"
            />
            <img
              src={darkLogo}
              alt="Sliders logo dark"
            />
          </picture>
        </div>
        <div className={`nav-elements`}>
          <ul>
            <li><NavLink to="/"><Icon component={ScheduleIcon} /></NavLink></li>
            <li><NavLink to="/practice"><Icon component={AllInclusiveIcon} /></NavLink></li>
            <li><NavLink to="/stats"><Icon component={QueryStatsIcon}/></NavLink></li>
            <li><NavLink to="/help"><Icon component={QuestionMarkIcon}/></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
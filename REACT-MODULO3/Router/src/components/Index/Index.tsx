import { Link, Outlet } from "react-router-dom"
import './index.css'

export const Index = () => {
    return(
        <div>
      <Link className="style-link" to={'/home'}>Home</Link>
      <Link className="style-link" to={'/about'}>About</Link>
      <Link className="style-link" to={'/contact'}>Contact</Link>
      <Outlet/>
        </div>
    )
}


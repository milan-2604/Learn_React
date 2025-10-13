import {NavLink} from "react-router-dom"
import '../Navbar.css'
function Navbar(){
return(
    <ul>
        <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink><br />
        <NavLink to="/about" className={({isActive})=>isActive?"active-link":""}>About</NavLink><br />
        <NavLink to="/dashboard" className={({isActive})=>isActive?"active-link":""}>Dashboard</NavLink>
    </ul>
)
}
export default Navbar
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import "./navbar.css"
import logo from"../component/image/bookmyshow-removebg-preview.png"

function Nav() {
    return(
        <nav className="navigation">
                <img src={logo}/>
                <CiHeart className="tabs"/> 
                <FiShoppingCart className="tabs"/> 
                <CiSearch className="tabs"/> 
                <IoHomeOutline className="tabs"/> 
                <RiAccountPinCircleLine className="tabs" /> 
        </nav>
    )
}
export default Nav;
import { useNavigate } from 'react-router-dom';
import "./header.css"



function Header(){
    const navigate = useNavigate();

    function logOut(){
        let a=prompt("Do you left your profile Yes/No")

        if(a==="Yes"){
navigate("/login")
        }
        else if(a==="No"){
            navigate("/profil")
        }
    }
    return(
    <div className="div22">
    <ul>
        <li>Menu</li>
        <li>Works</li>
        <li>Contact</li>
        <li onClick={logOut}>Log Out</li>
    </ul>
    </div>
    )
}
export default Header
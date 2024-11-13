import { NavLink,useNavigate } from "react-router-dom";
import "./navigation.css"





function Navigation(){
    const navigate = useNavigate();

    function loginadmin(){
        navigate("admin")
    }
    return(
        <div class="menu">
            <NavLink to="about">Մեր Մասին</NavLink>
            <NavLink to="product">Ապրանքներ</NavLink>
            <NavLink to="work">Աշխատանք</NavLink>
            <NavLink to="contact">Կապ</NavLink>
            <NavLink to="admin"  className="adm" onClick={loginadmin}>Admin</NavLink>
        </div>
    )
}

export default Navigation
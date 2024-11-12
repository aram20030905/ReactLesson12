import "./adminpage.css"
import { useNavigate } from "react-router";

function AdminPage(){
    let navigate1 = useNavigate()

    function handlerSubmit(el){
        el.preventDefault()
       let password=el.target.password.value
       
        console.log(password)


        if(password==="admin1234")
        {
          navigate1("/adm")         
        }
        else{
            console.log("Invalid Password")

        }
        el.target.reset()

    }
    return(
    <form className="Login" onSubmit={handlerSubmit}>
        <input  name="password" type="password" placeholder="Enter Admin Password ..."></input>
        <button type="submit">Submit</button>
    </form>
    )
}
export default AdminPage
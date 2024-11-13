import "./adminpage.css"
import { useNavigate } from "react-router";
import {useState} from "react"

function AdminPage(){
    let navigate1 = useNavigate()
    const [error,setError] = useState("")
    const [failedAttempts, setFailedAttempts] = useState(0);

    function handlerSubmit(el){
        el.preventDefault()
       let password=el.target.password.value



        if(password==="admin1234")
        {
            setError("")
            setFailedAttempts(0)
          navigate1("/adm")         
        }
        else{
           
          setFailedAttempts(prevAttempts => prevAttempts + 1);
        
         if(failedAttempts>=2){
            setError("you dont admin")
        }
        
        else{
              setError("invalid password")
        }
    }
        el.target.reset()

    
}
    return(
        <div>
    <form className="Login" onSubmit={handlerSubmit}>
        <input  name="password" type="password" placeholder="Enter Admin Password ..."></input>
        <button type="submit">Submit</button>
       
    </form>
    
    <p>{error}</p>
</div>
    )
}
export default AdminPage
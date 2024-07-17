import { useDispatch, useSelector } from "react-redux"
import { addNewUsers } from "../../store/slices/UserData/action"
import { useEffect } from "react"



function User() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state. usersData)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            dispatch(addNewUsers(data.users));
        };

        fetchData();
    }, []);
console.log(users)
    return (
        <div className="great">
            {users.map((el) => {
                return (
                    <div key={el.id} className="one">
                        <p><span>FirstName:</span>{el.firstName}</p>
                        <p><span>LastName:</span>{el.lastName}</p>
                        <p><span>Age:</span>{el.age}</p>
                        <p><span>Gender:</span>{el.gender}</p>
                        <img src={el.image}/>
                    
                    </div >
                )
            })}
        </div>
    )
}


export default User
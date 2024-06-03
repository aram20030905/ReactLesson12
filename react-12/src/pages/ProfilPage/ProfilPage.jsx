import "./profilPage.css";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header"
import img1 from '../../images/1.jpeg'

const ProfilPage = () => {
  const { state } = useLocation();
  console.log(state)

  return (
<div>
<Header/>
    <div className="profilPage">
        
      <div>
      <img src={img1}/>
      <h1>{state.firstName}</h1>
      <h1>{state.lastName}</h1>
      <h1>{state.fatherName}</h1>
      <h1>{state.fatherSurname}</h1>
      <p>{state.email}</p>
      <p>{state.gender}</p>
      <p>{state.country}</p>
      <p>{state.city}</p>
      <p>{state.password}</p>
      <button >Deleate</button>
      </div>
    </div>
    </div>
  );
};

export default ProfilPage;

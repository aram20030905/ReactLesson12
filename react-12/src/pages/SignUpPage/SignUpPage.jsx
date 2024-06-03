import { useLocation, useNavigate } from "react-router-dom";
import "./signUpPage.css";

const SignUpPage = ({ usersData, setUsersData }) => {
  const navigate = useNavigate();

  const handlerRegister = (e) => {
    e.preventDefault();
    const { firstName, lastName, fatherName, fatherSurname, gender, email, country, city, password } = e.target;
    let genderVariant = (gender[0].checked && gender[0].value) || (gender[1].checked && gender[1].value) || (gender[2].checked && gender[2].value);

    let newUser = {
      id: new Date().getTime().toString(),
      firstName: firstName.value,
      lastName: lastName.value,
      fatherName:fatherName.value,
      fatherSurname:fatherSurname.value,
      gender: genderVariant,
      email: email.value,
      country: country.value,
      city:city.value,
      password: password.value,
    };
console.log(newUser)
    setUsersData([...usersData, newUser]);
    console.log(setUsersData)

    navigate("/login");
  };

  return (
    <div className="signUpHolder">
      <div className="signUpPage">
        <div className="topPlace">
          <div className="left">
            <h2>Sign Up</h2>
            <p>It's quick and easy.</p>
          </div>
          <div className="right">✖</div>
        </div>
        <div className="line"></div>
        <form className="information" onSubmit={handlerRegister}>
          <div className="firstLastName">
            <input type="text" name="firstName" placeholder="First name" />
            <input type="text" name="lastName" placeholder="Last name" />
            </div>
            <div className="firstLastName">
            <input type="text" name="fatherName" placeholder="Father Name" />
            <input type="text" name="fatherSurname" placeholder="Father Surname" />
            </div>
          
          <span className="sectionName">Birthday �</span>
          <div className="birthday">
            <input type="date" name="data" />
          </div>
          <span className="sectionName">Gender �</span>
          <div className="gender">
            <span>
              <p>Female</p>
              <input type="radio" value="Female" name="gender" />
            </span>
            <span>
              <p>Male</p>
              <input type="radio" value="Male" name="gender" />
            </span>
            <span>
              <p>Custom</p>
              <input type="radio" value="Custom" name="gender" />
            </span>
          </div>
          <input className="infoInput" name="email" placeholder="Mobile number or email" />
          <input className="infoInput" type="text" name="country" placeholder="Enter your Country"/>
          <input className="infoInput" type="text" name="city" placeholder="Enter your City"/>
          <input className="infoInput" type="password" name="password" placeholder="New password" />
          <div className="footTextHolder">
            <p className="footText">
              People who use our service may have uploaded your contact information to Facebook.<a href="#">Learn more.</a>
            </p>
            <p className="footText">
              By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>. You may
              receive SMS Notifications from us and can opt out any time.
            </p>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

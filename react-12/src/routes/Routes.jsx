import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProfilPage from "../pages/ProfilPage/ProfilPage";
import LogInPage from "../components/LogInPage/LogInPage";
import { useState } from "react";

const AppRouter = () => {
  const [usersData, setUsersData] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" index element={<LogInPage usersData={usersData} />} />
        <Route path="sign-up" element={<SignUpPage setUsersData={setUsersData} usersData={usersData} />} />
        <Route path="profil" element={<ProfilPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;

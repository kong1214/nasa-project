import React, { useContext} from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import * as S from './LogoutButton.style'

function LogoutButton() {
    const { setUser, setIsAuthenticated, isAuthenticated } = useContext(AuthUserContext)


    const logout = async (e) => {
        e.preventDefault()
        setUser(null)
        window.localStorage.clear();
        if (isAuthenticated === false) window.location.reload()
        setIsAuthenticated(false)

    }

    return (
        <S.LogoutButton onClick={logout}>Log Out</S.LogoutButton>
    );
};

export default LogoutButton;

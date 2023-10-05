import React, { useState, useEffect, useRef } from "react";
import * as S from "./Navbar.style";
import jwt_decode from "jwt-decode";
import GoogleLogout from "../GoogleLogOut";
import LogoutButton from "../LogoutButton";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const dropDownRef = useRef();
  const iconRef = useRef();
  const token = localStorage.getItem('token')
  const googleLogin = localStorage.getItem('googleLogin')
  const email = jwt_decode(token).email

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    setIsActive(true)
  };


  // useEffect to close menu if something is clicked outside of the menu or button
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (
        !dropDownRef.current.contains(e.target) &&
        e.target.id !== "user-profile-button" &&
        !iconRef.current.contains(e.target)
      ) {
        setShowMenu(false);
        setIsActive(false)
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <S.Navbar>
      <S.UserContainer>
        <S.UserButton id="user-profile-button" isActive={isActive} onClick={openMenu}>
          <i ref={iconRef} className="fa-solid fa-user fa-xl"></i>
        </S.UserButton>
        <S.UserDropDownContainer showMenu={showMenu} ref={dropDownRef}>
          <S.UserInformationContainer>
            <S.UserName></S.UserName>
            <S.UserEmail>{email}</S.UserEmail>
          </S.UserInformationContainer>
         {googleLogin ? <GoogleLogout /> : <LogoutButton />}
        </S.UserDropDownContainer>
      </S.UserContainer>
    </S.Navbar>
  );
}

export default Navbar;

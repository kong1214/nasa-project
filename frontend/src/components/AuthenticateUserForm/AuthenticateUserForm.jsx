import React, { useState, useContext } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext"
import { baseUrl } from "../../config";
import * as S from "./AuthenticateUserForm.style";
import OpenModalButton from "../OpenModalButton";
import GoogleLoginButton from "../GoogleLogin";
import SignUpModal from "../SignUpModal";

function AuthenticateUserForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const { setUser, setIsAuthenticated } = useContext(AuthUserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${baseUrl}/api/v1/users/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    }).then(res => res.json()).then(data => {
      if (data.error) {
        setErrors([data.error])
      } else {
        window.localStorage.setItem('token', data.token)
        window.localStorage.setItem('loggedIn', true)
        setUser(data.user)
        setIsAuthenticated(true)
      }
    })
  }

  return (
    <S.PageWrapper>
      <S.FormWrapper onSubmit={handleSubmit}>
        <S.FormHeader>Login</S.FormHeader>
        <S.ErrorsContainer isError={!!errors.length}>
          {errors.map((error, idx) => (
            <S.ErrorDiv>{error}</S.ErrorDiv>
          ))}
        </S.ErrorsContainer>
        <S.FieldInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <S.FieldInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <S.ButtonWrappers>
          <S.Button type="submit">Log In</S.Button>
          <S.GoogleButtonContainer>
            <GoogleLoginButton>Continue</GoogleLoginButton>
          </S.GoogleButtonContainer>
          <S.OrDiv>or</S.OrDiv>
          <OpenModalButton buttonText="Signup" modalComponent={<SignUpModal />} />
        </S.ButtonWrappers>
      </S.FormWrapper>
    </S.PageWrapper>
  );
}

export default AuthenticateUserForm;

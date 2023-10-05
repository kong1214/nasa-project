import React, { useState, useContext } from "react";
import * as S from "./SignUpModal.style"
import { baseUrl } from "../../config";
import { useModal } from "../../Context/Modal";
import { AuthUserContext } from "../../Context/AuthUserContext";

function SignUpModal() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const { setUser, setIsAuthenticated } = useContext(AuthUserContext)
    const { closeModal } = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${baseUrl}/api/v1/users/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        }).then(res => res.json()).then(data => {
            if (data.error) {
                setErrors([data.error])
            } else {
                closeModal()
                setUser(data.user)
                setIsAuthenticated(true)
                window.localStorage.setItem('token', data.token)
                window.localStorage.setItem('loggedIn', true)
            }
        })
    }

    return (
        <S.FormWrapper onSubmit={handleSubmit}>
            <S.FormHeader>Sign Up</S.FormHeader>
            <S.ErrorsContainer isError={!!errors.length}>
                {errors.map((error, idx) => (
                    <S.ErrorDiv>{error}</S.ErrorDiv>
                ))}
            </S.ErrorsContainer>
            <S.FormInput
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
            />
            <S.FormInput
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
            />
            <S.FormInput
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <S.FormInput
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <S.Button type="submit">Submit</S.Button>
        </S.FormWrapper>
    )
}

export default SignUpModal

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import React, { useContext } from 'react';
import { AuthUserContext } from '../../Context/AuthUserContext';

function GoogleLoginButton() {
    const { setUser, setIsAuthenticated } = useContext(AuthUserContext)


    const onSuccess = async (credentialResponse) => {
        let decoded = jwt_decode(credentialResponse.credential)
        // console.log(decoded)
        let userInfo = {
            firstName: decoded.given_name,
            lastName: decoded.family_name,
            email: decoded.email
        }

        setUser(userInfo)
        setIsAuthenticated(true)
        window.localStorage.setItem('token', credentialResponse.credential)
        window.localStorage.setItem('loggedIn', true)
        window.localStorage.setItem('googleLogin', true)
    }
    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}


export default GoogleLoginButton

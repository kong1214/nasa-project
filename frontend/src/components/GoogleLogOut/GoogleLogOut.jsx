import { googleLogout } from "@react-oauth/google";
import * as S from './GoogleLogOut.style'

function GoogleLogout() {

    const handleClick = async (e) => {
        e.preventDefault()
        window.localStorage.clear();
        window.location.reload()
        googleLogout();
    }

    return (
        <S.GoogleLogOutButton onClick={handleClick}>Log Out</S.GoogleLogOutButton>
    )
}

export default GoogleLogout

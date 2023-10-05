import styled from "styled-components";
import starPic from '../../images/stars.jpg'

export const HomeWrapper = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${starPic});
    background-size: cover;
    background-size: center;
`

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 85%;
    height: 75%;
    background-color: white;
    opacity: .8;
    border-radius: 15px;
    padding: 15px;
`
export const MainHeader = styled.div`
    font-size: 3em;
    width: 20%:
    background-color: blue
`

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ImageContainer = styled.div`
    width: 49%;
    height: fit-content;
    border: none;
    border-radius: 15px;
    background-color: black;
    color: white;
    opacity: 1;
    overflow: hidden;
`
export const ImageOfTheDay = styled.img`
    max-height: 100%;
    max-width: 100%;
`

export const ImageTitleExplanationCopyrightDate = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    color: black;
`
export const ImageTitle = styled.div`
    width: 100%;
    font-size: 3.2em;
`
export const CopyrightDateContainer = styled.div`
    width: 100%;
    font-size: 2.5em;
`

export const ImageExplanation = styled.div`
    width: 100%;
    font-size: 1.3em;
`

import styled from "styled-components";
import starPic from '../../images/stars.jpg'

export const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${starPic});
    background-size: cover;
    background-size: center;
`
export const FormWrapper = styled.form`
    width: 600px;
    height: 600px;
    padding: 100px;
    background-color: #2d67d2;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`
export const FormHeader = styled.div`
    width: 80%;
    font-size: 4em;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 40px;
`
export const ErrorsContainer = styled.div`
    display: ${props => props.isError ? 'block': 'none'};
    width: 80%;
    background-color: white;
    height: ${props => props.isError ? '40px': '0'};
    text-align: center;
    border-radius: 15px;
    margin-bottom: 40px;
`
export const ErrorDiv = styled.div`
    font-size: 2em;
    color: red;

`
export const FieldInput = styled.input`
    border: none;
    width: 80%;
    height: 40px;
    margin-bottom: 15px;
    border-radius: 15px;
    font-size: 1.5em;
`
export const ButtonWrappers = styled.div`
    margin-top: 20px;
    width: 80%;
`
export const Button = styled.button`
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    border: none;
    border-radius: 20px;
    font-size: 1.5em;
    &: hover {
        color: white;
        background-color: #2cacd3;
    }
`
export const GoogleButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const OrDiv = styled.div`
    color: white;
    font-size: 2em;
    text-align: center;
    margin-bottom: 10px;
`

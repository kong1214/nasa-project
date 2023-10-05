import styled from "styled-components";


export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FormHeader = styled.div`
    width: 80%;
    font-size: 3em;
    font-weight: bold;
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
export const FormInput = styled.input`
    border: none;
    width: 80%;
    height: 40px;
    margin-bottom: 15px;
    border-bottom: 1px solid black;
    font-size: 1.5em;
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

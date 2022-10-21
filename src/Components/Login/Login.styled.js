import styled from "styled-components";


export const WrapLogin = styled.div`
    width: 75%;
    height: 500px;
    margin: auto;
    background-color: white;
    border-radius: 10px;
    display: flex;
`
export const WrapHalf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
`
export const SigninBtn = styled.button`
    font-size: 18px;
    background-color: #C7F2A4;
    color: #596f62;
    padding: 10px 15px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 10px;
    :hover {
        background-color: #5fad56;
        color: white;
    }
`
export const Paragraph = styled.p`
    margin-top: 5px;
    color: #b79ced;
    text-align: center;
`
export const LinkBtn = styled.button`
    color: grey;
    border: none;
    cursor: pointer;
    background-color: white;
`
export const OptionalDiv = styled.div`
    /* border: 2px solid skyblue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    & a {
        text-decoration: none;
    }
`
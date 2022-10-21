import { TextField } from '@mui/material';
import styled from 'styled-components';

export const FieldContainer = styled.div`
    width: 50%;
    /* border: 2px solid green; */
    margin: 20px auto;
    display: flex;
    justify-content: flex-end;
`
export const UpdateBtn = styled.button`
    width: 150px;
    font-size: 18px;
    background-color: #C7F2A4;
    color: #596f62;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background-color: #5fad56;
        color: white;
    }
`
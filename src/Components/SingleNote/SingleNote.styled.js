import { Card } from '@mui/material';
import styled from 'styled-components';

export const StyleCard = styled(Card)`
    :hover {
        background-color: #bd7ff2;
        color: white;
        & ~ div {
        display: none;
        }   
    }
`
export const ColorDiv = styled.div`
    margin-top: 10px;
    background-color: #bd7ff2;
    height: 5px;
    border-radius: 15px;
`
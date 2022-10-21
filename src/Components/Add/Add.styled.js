import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import { Box, Button} from '@mui/material';
import { purple } from '@mui/material/colors';

export const BootstrapDialog = styled(Dialog)`
  /* border: 2px solid yellow; */
`
// export const BootstrapDialog = styled(Dialog)(({ theme }) => ({

// }));
    

export const AddBtn = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #7D6E83;
    color: white;
    margin: 10px 0;
    padding: 10px 40px;
    border-radius: 5px;
    cursor: pointer;
`
export const FormWrapper = styled.div`
    width: 600px;
  /* border: 2px solid blue; */
`
export const FormFieldContainer = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content: flex-end;
`
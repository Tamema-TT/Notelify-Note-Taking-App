import { Avatar, Card, CardMedia, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField} from '@mui/material';
import React from 'react';
import { LinkBtn, OptionalDiv, Paragraph, SigninBtn, WrapHalf, WrapLogin } from './Login.styled';
import Check from '../../Images/Checklist.jpg';
import Header from '../Header/Header';
import { Container } from '../Sidebar/Sidebar.styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FieldContainer } from '../Update/Update.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser, loggedUser} from '../../utilities/fakedb';



const Login = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [signUp, setSignup] = useState(false);
    const handleSignUp = () => {
        setSignup(true);
    }
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value});
        setPassword(event.target.value);
    };
    const navigate = useNavigate();
    const handleRegister = () => {
        addUser(name, email, password);
        setSignup(false);
        setEmail('');
        setValues({password: ''});
        navigate("/");
    }
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = () => {
        const login = loggedUser(email, password);
        if(login) {
            navigate("/read");
        }
        else {
            alert('Not valid user');
        }
    }
    return (
        <WrapLogin>
            <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item xs={6}>
                    <WrapHalf>
                        {/* <Avatar alt="Remy Sharp" src={Check} /> */}
                        <Card>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={Check}
                                alt="loading..."
                            />
                        </Card>
                    </WrapHalf> 
                </Grid>
                <Grid item xs={6}>
                    <WrapHalf>
                        <Container >
                            <Header></Header>
                        </Container>
                        <Container >
                            <Paragraph>Welcome to Notelify</Paragraph>
                        </Container>
                            {
                                signUp ?    
                                <FieldContainer>
                                    <TextField
                                        label="Name"
                                        type="text"
                                        variant="standard"
                                        onChange={handleName}
                                        fullWidth
                                    />
                                </FieldContainer>
                                :
                                null
                            }
                        <FieldContainer>
                            <TextField
                                label="Email"
                                type="email"
                                variant="standard"
                                value={email}
                                onChange={handleEmail}
                                fullWidth
                            />
                        </FieldContainer>
                        <Container>
                            <FormControl variant="standard" sx ={{m: 1}}>
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Container>
                        {
                            !signUp ?    
                            <OptionalDiv>
                                <LinkBtn>Forgot Password?</LinkBtn>
                                    <OptionalDiv>
                                        <SigninBtn onClick={handleLogin}>Sign in</SigninBtn>
                                    </OptionalDiv>
                                <Paragraph>Or</Paragraph>
                                <Paragraph>
                                    New Here? 
                                    <LinkBtn onClick={handleSignUp}>Create account</LinkBtn>
                                </Paragraph>
                            </OptionalDiv>
                            :
                            <Container>
                                <SigninBtn onClick={handleRegister}>Register</SigninBtn>
                            </Container>
                        }
                    </WrapHalf> 
                </Grid>
            </Grid>
        </WrapLogin>
    );
};

export default Login;
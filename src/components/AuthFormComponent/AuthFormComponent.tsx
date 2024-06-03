import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {userService} from "../../services/userService";
import {useNavigate} from "react-router-dom";
import css from './AuthFormComponent.module.css'


const AuthFormComponent = () => {
    const {handleSubmit, register}=
        useForm<IAuthDataModel>({defaultValues:{username:'user123456', password:'Pa$$word1'}});
    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const  navigate = useNavigate();

    const authenticate = async (formData:IAuthDataModel)=>{
        const isAuth = await userService.authentication(formData);
        setIsAuthState(isAuth);
        if(isAuth){
            setErrorMessage(null);
            navigate('/cars');
        }else {
            setErrorMessage('Incorrect username or password');
        }

    }

    return (
        <div className={css.authComp}>
            <h1>Enter username and password, please!</h1>
            <div>{isAuthState?<h4>You are logged in!</h4>:<h4>You are not logged in!!!</h4>}</div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} placeholder={'username'} {...register('username')}/>
                <input type={"text"} placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
            {errorMessage && <h2>{errorMessage}</h2>}

        </div>
    );
};

export default AuthFormComponent;
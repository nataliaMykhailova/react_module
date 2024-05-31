import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {useNavigate} from "react-router-dom";
import {userServices} from "../../services/userServices";

const AuthFormComponent = () => {
   const {handleSubmit, register} =  useForm<IAuthDataModel>();
    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
   const authenticate = async (formData:IAuthDataModel)=>{
       const isAuth = await userServices.authentication(formData);
       setIsAuthState(isAuth);
    if (isAuth) {
        setErrorMessage(null);
        navigate('/cars');
    } else {
        setErrorMessage('Incorrect username or password');
    }
};
    return (
        <div>
            <h1>Enter your username and password, please!</h1>
            <form onSubmit={handleSubmit(authenticate)}>
                {isAuthState?<div>ok</div>:<div>not ok</div>}
                <input type={"text"} placeholder={"username"} {...register("username")}/>
                <input type={"text"} placeholder={"password"} {...register("password")}/>
                <button>Login</button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
};

export default AuthFormComponent;
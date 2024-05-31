import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {userServices} from "../../services/userServices";
import {useNavigate} from "react-router-dom";
import {IUserRegModel} from "../../models/IUserRegModel";

const RegistrationFormComponent = () => {
    const {handleSubmit, register} =  useForm<IUserRegModel>();
    const [isRegState, setIsRegState] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const registrate= async (formData:IUserRegModel)=>{
        const isReg = await userServices.registration(formData);
        setIsRegState(isReg);
        if (isReg) {
            setErrorMessage(null);
            navigate('/auth');
        } else {
            setErrorMessage('Incorrect username or password');
        }
    };
    return (
        <div>
            <h1>Please, enter a unique username and password:</h1>
            <form onSubmit={handleSubmit(registrate)}>
                {isRegState?<div>ok</div>:<div>not ok</div>}
                <input type={"text"} placeholder={'username'} {...register("username")}/>
                <input type={"text"} placeholder={'password'} {...register("password")}/>
                <button>register me</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
            
            </div>
    );
};

export default RegistrationFormComponent;
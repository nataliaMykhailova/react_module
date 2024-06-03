import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {IUserRegModel} from "../../models/IUserRegModel";
import {userService} from "../../services/userService";
import css from './RegFormComponent.module.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {regValidator} from "../../validators/regValidator";

const RegFormComponent = () => {
    const [isRegState, setIsRegState] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    let {register,
        handleSubmit,
        formState:{errors}} = useForm<IUserRegModel>({mode: "all", resolver: joiResolver(regValidator)});
    const navigate = useNavigate();
    const registrate= async (formData:IUserRegModel)=>{
        const isReg = await userService.registration(formData);
        setIsRegState(isReg);
        if (isReg) {
            setErrorMessage(null);
            navigate('/auth');
        } else {
            setErrorMessage('Username is not unique or the password is not strong enough!!!');
        }
    };

    return (
        <div className={css.regComp}>
            <h1>Please, enter a unique username and password:</h1>
            <form onSubmit={handleSubmit(registrate)}>
                <div className={css.inputGroup}>
                <input type={"text"} placeholder={'username'} {...register("username")}/>
                {errors.username && <p>{errors.username.message}</p>}
                </div>
                <div className={css.inputGroup}>
                <input type={"text"} placeholder={'password'} {...register("password")}/>
                {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button>registrate</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>

        </div>
    );
};

export default RegFormComponent;
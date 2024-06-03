import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import css from './CreateCarComponent.module.css';
interface IProps{
    createCar: (createDate:ICarWithAuthModel)=>void;
}

const CreateCarComponent:FC<IProps> = ({createCar}) => {
    const {handleSubmit, register,reset} =  useForm<ICarWithAuthModel>();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const createCarHandler = async (createData:ICarWithAuthModel)=>{
        try {
            await createCar(createData);
            setErrorMessage(null);
            reset();
        }catch (e){
            setErrorMessage(null);

        }
    };
    return (
        <div className={css.createComp}>
            <h1>Create new car:</h1>
            <form onSubmit={handleSubmit(createCarHandler)}>
                <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input type={"number"} placeholder={'price'} {...register('price')}/>
                <input type={"number"} placeholder={'year'} {...register('year')}/>
                <button>Create</button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
            
            </div>
    );
};

export default CreateCarComponent;
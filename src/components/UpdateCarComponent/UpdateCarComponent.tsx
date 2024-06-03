import React, {FC, useState} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import {useForm} from "react-hook-form";
import css from './UpdateCarComponent.module.css'
interface IProps {
    car: ICarWithAuthModel;
    updateCar: (updateData: ICarWithAuthModel, carId: number) => void;
}
const UpdateCarComponent:FC<IProps> = ({car, updateCar}) => {
    const {handleSubmit, register,reset} =  useForm<ICarWithAuthModel>();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const updateCarHandler = async (updateData:ICarWithAuthModel)=>{
        try {
            await updateCar(updateData, car.id);
            setErrorMessage(null);
            reset();
        }catch (e) {
            setErrorMessage('Incorrect entered data');
        }
    };
    return (
        <div className={css.update}>
            <form onSubmit={handleSubmit(updateCarHandler)}>
                <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input type={"number"} placeholder={'price'} {...register('price')}/>
                <input type={"number"} placeholder={'year'} {...register('year')}/>
                <button>Update</button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
            
            </div>
    );
};

export default UpdateCarComponent;
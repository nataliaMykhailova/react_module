import React, {FC, useState} from 'react';
import {ICarWithAuthModel} from "../../models/carModels/ICarWithAuthModel";
import {useForm} from "react-hook-form";
import {carServices} from "../../services/carServices";
interface IProps{
    car:ICarWithAuthModel;
}
const UpdateCarComponent:FC<IProps> = ({car}) => {
    const {handleSubmit, register,reset} =  useForm<ICarWithAuthModel>();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const updateCar = async (updateData:ICarWithAuthModel)=>{
        const update =  await carServices.updateCar(updateData, car.id);
        if (update) {
            setErrorMessage(null);
            reset();
        } else {
            setErrorMessage('Incorrect entered data');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(updateCar)}>
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
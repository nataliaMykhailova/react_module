import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {ICarWithAuthModel} from "../../models/carModels/ICarWithAuthModel";
import {carServices} from "../../services/carServices";

const CreateCarComponent = () => {
    const {handleSubmit, register,reset} =  useForm<ICarWithAuthModel>();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const createCar = async (createData:ICarWithAuthModel)=>{
       const create =  await carServices.createCar(createData);
        if (create) {
            setErrorMessage(null);
            reset();
        } else {
            setErrorMessage('Incorrect entered data');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(createCar)}>
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
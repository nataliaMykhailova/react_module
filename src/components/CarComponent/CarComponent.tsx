import React, {FC, useState} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import css from './CarComponent.module.css'
import UpdateCarComponent from "../UpdateCarComponent/UpdateCarComponent";
interface IProps{
    car: ICarWithAuthModel;
    updateCar: (updateData: ICarWithAuthModel, carId: number) => void;
    deleteCar: (carId: number) => void;
}
const CarComponent:FC<IProps> = ({car, updateCar, deleteCar}) => {
    const [showUpdateComponent, setShowUpdateComponent] = useState(false);
    const handleUpdateClick = () => {
        setShowUpdateComponent(!showUpdateComponent);
    };
    const handleDeleteClick = async ()=> {
        try {
            await deleteCar(car.id);
        } catch (e){
            console.log(e);
        }
    }
    return (
        <div className={css.container}>
            <div className={css.car}>
            <div>
            <h2>{car.id} - model: {car.brand}</h2>
            <h3>Price - {car.price}</h3>
            <h5>Year - {car.year}</h5>
            </div>
            <button onClick={handleUpdateClick}>update car</button>
            <button onClick={handleDeleteClick}>delete car</button>
            </div>
            <div>
            {showUpdateComponent && <UpdateCarComponent car={car} updateCar={updateCar}/>}
            </div>

        </div>
    );
};

export default CarComponent;
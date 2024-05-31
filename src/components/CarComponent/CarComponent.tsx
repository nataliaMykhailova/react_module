import React, {FC, useState} from 'react';
import {ICarWithAuthModel} from "../../models/carModels/ICarWithAuthModel";
import css from './CarComponent.module.css';
import UpdateCarComponent from "../UpdadeCarComponent/UpdateCarComponent";
import {carServices} from "../../services/carServices";
interface ICarProps{
    car: ICarWithAuthModel
}
const CarComponent:FC<ICarProps> = ({car}) => {
    const [showUpdateComponent, setShowUpdateComponent] = useState(false);
    const handleUpdateClick = () => {
        setShowUpdateComponent(!showUpdateComponent);
    };
    const handleDeleteClick = async ()=> {
        const deleteCar = await carServices.deleteCar(car.id);
        if (deleteCar) {
            console.log('car deleted');
        } else {
            console.log('Failed to delete car');
        }
    }
    return (
        <div className={css.car}>
            <h3>{car.id}: model - {car.brand}</h3>
            <h5>year: {car.year}, price: {car.price}</h5>
            <button onClick={handleUpdateClick}>update car</button>
            <button onClick={handleDeleteClick}>delete car</button>
            {showUpdateComponent && <UpdateCarComponent car={car} />}

        </div>
    );
};

export default CarComponent;
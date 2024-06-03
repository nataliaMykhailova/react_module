import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import CarComponent from "../CarComponent/CarComponent";


interface IProps{
    cars: ICarWithAuthModel[];
    updateCar: (updateData: ICarWithAuthModel, carId: number) => void;
    deleteCar: (carId: number) => void;
}
const CarsComponent:FC<IProps> = ({cars, updateCar, deleteCar}) => {
    return (
        <div>
            {
                cars.map(car => <CarComponent key={car.id} car={car} updateCar={updateCar} deleteCar={deleteCar}/>)
            }
        </div>
    );
};

export default CarsComponent;
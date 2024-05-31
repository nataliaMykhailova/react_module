import React, {useEffect, useState} from 'react';
import CarsComponent from "../../components/CarsComponent/CarsComponent";
import CreateCarComponent from "../../components/CreateCarComponent/CreateCarComponent";
import {ICarWithAuthModel} from "../../models/carModels/ICarWithAuthModel";
import {carServices} from "../../services/carServices";

const CarsPage = () => {
    const [showCreateCar, setShowCreateCar] = useState(false);
    const [cars, setCars] = useState<ICarWithAuthModel[]>([]);
    const [updateTrigger, setUpdateTrigger] = useState(false);
    useEffect(() => {
        carServices.getCars().then(value => {
            if(value){
                setCars([...value.items])
            }});
    }, [updateTrigger]);

    const handleClick = () => {
        setShowCreateCar(true);
    };
    const handleUpdateCars = () => {
        setUpdateTrigger(!updateTrigger);
    };
    return (
        <div>
            <button onClick={handleClick}>Add new car</button>
            {showCreateCar && <CreateCarComponent/>}
            <button onClick={handleUpdateCars}>Refresh Car List</button>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;
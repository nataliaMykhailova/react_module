import React, {useEffect, useState} from 'react';
import CarsComponent from "../../components/CarsComponent/CarsComponent";
import {carService} from "../../services/carService";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";
import {userService} from "../../services/userService";
import CreateCarComponent from "../../components/CreateCarComponent/CreateCarComponent";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";

const CarsPage = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarPaginatedModel>({
            items: [],
            next: null,
            prev: null,
            total_items: 0,
            total_pages: 0
        }
    );
    const getCarsData = async ()=> {
        try {
            const response = await carService.getAllCars(query.get('page') || '1');
            if (response) {
                setCarsPaginatedObj(response);
            }
        } catch (e){
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status===401){
                try {
                    await userService.refresh();
                }catch (e) {
                    return navigate('/auth');
                }
            }
            const response = await carService.getAllCars(query.get('page') || '1');
            if (response) {
                setCarsPaginatedObj(response);
            }
        }
    }

    useEffect(() => {
        getCarsData();
    }, [query, getCarsData]);
    const handleCreateCar = async (createData:ICarWithAuthModel) => {
        const create = await carService.createCar(createData);
        if (create) {
            getCarsData();
        } else {
            console.log('Failed to create car');
        }
    };
    const handleUpdateCar = async (updateData:ICarWithAuthModel, carId:number) => {
        const update = await carService.updateCar(updateData, carId);
        if (update) {
            getCarsData();
        } else {
            console.log('Failed to update car');
        }
    };
    const handleDeleteCar = async (carId:number) => {
        const deleteCar = await carService.deleteCar(carId);
        if (deleteCar) {
            getCarsData();
        } else {
            console.log('Failed to delete car');
        }
    };


    return (
        <div>
            <CreateCarComponent createCar={handleCreateCar}/>
            <CarsComponent cars={carsPaginatedObj.items} updateCar ={handleUpdateCar} deleteCar={handleDeleteCar}/>
            <PaginationComponent setQuery ={setQuery} prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
        </div>
    );
};

export default CarsPage;
import {apiService} from "./apiSevice";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {urls} from "../constants/Urls";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const carService = {
    getAllCars: async (page:string='1'):Promise<ICarPaginatedModel | null> => {
            const response = await apiService.get<ICarPaginatedModel>(urls.carsUrl, {params:{page:page}});
            return response.data;
    },
    createCar: async (createData:ICarWithAuthModel):Promise<ICarWithAuthModel | null>=>{
        try{
            const response = await apiService.post<ICarWithAuthModel>(urls.carsUrl, createData);
            return response.data;
        } catch (e){
            console.log(e);
            return null;
        }
    },
    updateCar: async (updateData:ICarWithAuthModel, carId:number):Promise<ICarWithAuthModel | null> => {
        try{
            const response = await apiService.put(urls.carsUrl+'/'+carId, updateData);
            return response.data;
        } catch (e){
            console.log(e);
            return null;
        }
    },
    deleteCar: async (carId:number):Promise<boolean> =>{
        try {
            await apiService.delete(urls.carsUrl+'/'+carId);
            return true
        } catch (e){
            console.log(e);
            return false;
        }
    }
}

export {
    carService
}
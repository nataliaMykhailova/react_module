import {ICarPaginatedModel} from "../models/carModels/ICarPaginatedModel";
import {apiService} from "./apiServices";
import {urls} from "../constants/urls";
import {AxiosError} from "axios";
import {retrieveLocalStorageData} from "../helpers/retrieveLocalStorageData";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {userServices} from "./userServices";
import {ICarWithAuthModel} from "../models/carModels/ICarWithAuthModel";


const carServices = {
    getCars: async (): Promise<ICarPaginatedModel | null> => {
        try {
            const response = await apiService.get<ICarPaginatedModel>(urls.carsUrl);
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await userServices.refresh(refreshToken);
                return await carServices.getCars();
            }
        }
        return null;

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
    carServices
}
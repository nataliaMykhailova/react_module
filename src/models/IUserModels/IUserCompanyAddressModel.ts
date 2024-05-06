import {IUserCompanyAddressCoordinatesModel} from "./IUserCompanyAddressCoordinatesModel";

export interface IUserCompanyAddressModel{
    address: string,
    city: string,
    coordinates:IUserCompanyAddressCoordinatesModel,
    postalCode: string,
    state: string
}